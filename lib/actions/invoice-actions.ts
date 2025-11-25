"use server";

import { generateUniqueInvoiceID } from "@/src/utils/generate-unique-invoice-id";
import { prisma } from "../prisma";
import { EmptyInvoice, Invoice } from "@/src/types/invoice-types";

/**
 * Creates a new empty invoice and associates it with the given user.
 * @throws {Error} If the user is not found or if the invoice ID cannot be generated.
 * @param {string} userEmail - The email address of the user.
 * @param {string} invoiceName - The name of the new invoice.
 * @returns {Promise<{ success: boolean; data?: EmptyInvoice; error?: string }>} A promise resolving to an object indicating success, data, or error.
 */
export async function createEmptyInvoice(
  userEmail: string,
  invoiceName: string
): Promise<{ success: boolean; data?: EmptyInvoice; error?: string }> {
  try {
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return { success: false, error: "User not found" };
    }

    if (!user.id) {
      return { success: false, error: "User ID not found" };
    }

    const invoiceID = await generateUniqueInvoiceID();

    if (!invoiceID) {
      return { success: false, error: "Failed to generate invoice ID" };
    }

    const newInvoice = await prisma.invoice.create({
      data: {
        id: invoiceID,
        name: invoiceName,
        userId: user.id,
      },
    });

    return { success: true, data: newInvoice };
  } catch (error) {
    console.error("Error creating empty invoice:", error);
    return { success: false, error: "Error creating empty invoice" + error };
  }
}

/**
 * Retrieves all invoices for a specific user from the database, including their associated lines.
 * @param {string} userId - The ID of the user whose invoices are to be retrieved.
 * @param {number} [limit] - Optional. The maximum number of invoices to retrieve.
 * @returns {Promise<{ success: boolean; data?: Invoice[]; error?: string }>} A promise resolving to an object indicating success, data (an array of invoices with lines), or an error message.
 */
export async function getAllInvoicesByUserId(
  userId: string,
  limit?: number
): Promise<{ success: boolean; data?: Invoice[]; error?: string }> {
  try {
    const invoices = await prisma.invoice.findMany({
      where: { userId: userId },
      include: { lines: true },
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!invoices) {
      return { success: false, error: "Invoices not found" };
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

    return { success: true, data: invoices };
  } catch (error) {
    console.log("Error while trying retrieval invoices", error);
    return {
      success: false,
      error: "Error while trying retrieval invoices" + error,
    };
  }
}

/**
 * Retrieves a specific invoice by its ID from the database, including its associated lines.
 * @param {string} id - The ID of the invoice to retrieve.
 * @returns {Promise<{ success: boolean; data?: Invoice; error?: string }>} A promise resolving to an object indicating success, data, or error.
 * @throws {Error} If an error occurs during the database retrieval.
 */
export async function getInvoiceById(
  id: string
): Promise<{ success: boolean; data?: Invoice; error?: string }> {
  try {
    const invoice = await prisma.invoice.findUnique({
      where: { id },
      include: { lines: true },
    });

    if (!invoice) {
      return { success: false, error: "Invoice not found" };
    }

    return { success: true, data: invoice };
  } catch (error) {
    return {
      success: false,
      error: `Error while trying retrieval invoice ${id}.` + error,
    };
  }
}
