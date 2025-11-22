"use server";

import { generateUniqueInvoiceID } from "@/src/utils/generate-unique-invoice-id";
import { prisma } from "../prisma";
import { EmptyInvoice, Invoice } from "@/src/types/invoice-types";

/**
 * Creates a new empty invoice and associates it with the given user.
 * @throws {Error} If the user is not found or if the invoice ID cannot be generated.
 * @param {string} userEmail - The email address of the user.
 * @param {string} invoiceName - The name of the new invoice.
 * @returns {Promise<Prisma.Invoice>>} A promise resolving to the newly created invoice.
 */
export async function createEmptyInvoice(
  userEmail: string,
  invoiceName: string
): Promise<EmptyInvoice> {
  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (!user.id) {
      throw new Error("User ID not found");
    }

    const invoiceID = await generateUniqueInvoiceID();

    if (!invoiceID) {
      throw new Error("Failed to generate invoice ID");
    }

    const newInvoice = await prisma.invoice.create({
      data: {
        id: invoiceID,
        name: invoiceName,
        userId: user.id,
      },
    });

    return newInvoice;
  } catch (error) {
    console.error("Error creating empty invoice:", error);
    throw error;
  }
}

/**
 * Retrieves all invoices for a specific user from the database, including their associated lines.
 * @param {string} userId - The ID of the user whose invoices are to be retrieved.
 * @param {number} [limit] - Optional. The maximum number of invoices to retrieve.
 * @returns {Promise<Invoice[]>} A promise resolving to an array of invoices with their lines.
 * @throws {Error} If an error occurs during the database retrieval.
 */
export async function getAllInvoicesByUserId(
  userId: string,
  limit?: number
): Promise<Invoice[]> {
  try {
    const invoices = await prisma.invoice.findMany({
      where: { userId: userId },
      include: { lines: true },
      take: limit,
    });

    if (!invoices) {
      throw new Error("Invoices not found");
    }

    // Update invoices status to 'Impayée' if due date is passed and invoice status is 'En Attente'
    // Brouillon = 1, Envoyée = 2, Validée = 3, En Attente: 4, Payée = 5 , Annulée = 6, Impayée = 7
    if (invoices) {
      const today = new Date();
      invoices.map(async (invoice: any) => {
        const dueDate = new Date(invoice.dueDate);
        if (dueDate < today && invoice.status === 4) {
          const updatedInvoice = await prisma.invoice.update({
            where: { id: invoice.id },
            data: { status: 7 },
            include: { lines: true },
          });
          return updatedInvoice;
        }
      });
    }

    return invoices;
  } catch (error) {
    console.log("Error while trying retrieval invoices", error);
    throw error;
  }
}
