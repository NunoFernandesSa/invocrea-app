import { generateUniqueInvoiceID } from "@/src/utils/generate-unique-invoice-id";
import { prisma } from "../prisma";
import { EmptyInvoice } from "@/src/types/invoice-types";

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
