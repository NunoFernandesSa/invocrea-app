"use server";

import { generateUniqueInvoiceID } from "@/src/utils/generate-unique-invoice-id";
import { prisma } from "../prisma";
import { EmptyInvoice, Invoice } from "@/src/types/invoice-types";
import { serverCache } from "../server-cache";
import { getCached } from "@/src/helpers/getCached";
import { Result } from "@/src/types/result-props-types";

/**
 * Creates a new empty invoice and associates it with the given user.
 * @throws {Error} If the user is not found.
 * @param {string} userEmail - The email address of the user.
 * @param {string} invoiceName - The name of the new invoice.
 * @returns {Promise<{ success: boolean; data?: EmptyInvoice; error?: string }>} A promise resolving to an object indicating success, data, or error.
 * @example
 * createEmptyInvoice("pY9wV@example.com", "New Invoice");
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

    // delete cache for all invoices of the user
    serverCache.deleteByPattern(`invoices:user:${user.id}`);
    serverCache.deleteByPattern(`invoices:user:${userEmail}`);

    // delete cache for specific invoice if exists
    serverCache.delete(`invoice:${invoiceID}`);

    return { success: true, data: newInvoice };
  } catch (error) {
    console.error("Error creating empty invoice:", error);
    return { success: false, error: "Error creating empty invoice" + error };
  }
}

/**
 * Retrieves all invoices for a given user id, with an optional limit.
 * First, it will try to retrieve the invoices from the cache.
 * If the cache is empty, it will fetch the invoices from the database.
 * If the invoices are found, it will update the status of the invoices if needed.
 * Finally, it will return the invoices in the success response.
 * @param {string} userId - The id of the user.
 * @param {number} [limit] - The limit of invoices to retrieve.
 * @returns {Promise<{ success: boolean; data?: Invoice[]; error?: string }}>}
 * @example
 * getAllInvoicesByUserId("userId123", 10);
 */
export async function getAllInvoicesByUserId(
  userId: string,
  limit?: number
): Promise<{ success: boolean; data?: Invoice[]; error?: string }> {
  try {
    // create a unique cache key based on userId and limit
    const cacheKey = limit
      ? `invoices:user:${userId}:limit:${limit}`
      : `invoices:user:${userId}`;

    // use helper to get from cache or fetch from DB
    const invoices = await getCached<Result<Invoice[]>>(
      cacheKey,
      async () => {
        console.log(`🔄 Get from DB for ${cacheKey}`);

        const invoicesFromDb = await prisma.invoice.findMany({
          where: { userId: userId },
          include: { lines: true },
          take: limit,
          orderBy: {
            createdAt: "desc",
          },
        });

        if (!invoicesFromDb || invoicesFromDb.length === 0) {
          return {
            success: false,
            error: "No invoices found",
          };
        }

        // update status if needed
        const today = new Date();
        const updatePromises = invoicesFromDb.map(async (invoice: any) => {
          if (!invoice.dueDate) return invoice;

          const dueDate = new Date(invoice.dueDate);
          if (dueDate < today && invoice.status === 4) {
            return await prisma.invoice.update({
              where: { id: invoice.id },
              data: { status: 7 },
              include: { lines: true },
            });
          }
          return invoice;
        });

        // wait for all updates
        const updatedInvoices = await Promise.all(updatePromises);

        return { success: true, data: updatedInvoices };
      },
      60 // Cache de 60 secondes (ajustable)
    );

    return invoices;
  } catch (error) {
    console.log("Error while trying retrieval invoices", error);
    return {
      success: false,
      error: "Error while trying retrieval invoices" + error,
    };
  }
}

/**
 * Retrieves an invoice by its id.
 * If the invoice is found, it returns the invoice data.
 * If the invoice is not found, it returns an error message.
 * If there is an error while trying to retrieve the invoice, it returns an error message.
 * It uses a cache to store the invoice data for 5 minutes.
 * @param {string} id - The id of the invoice.
 * @returns {Promise<{ success: boolean; data?: Invoice; error?: string }>} A promise resolving to an object containing the success status, invoice data, or error message.
 * @example
 * getInvoiceById("invoiceId123");
 */
export async function getInvoiceById(
  id: string
): Promise<{ success: boolean; data?: Invoice; error?: string }> {
  try {
    const cacheKey = `invoice:${id}`;

    const invoice = await getCached<Result<Invoice>>(
      cacheKey,
      async () => {
        console.log(`🔄 Get from DB for ${cacheKey}`);

        const invoiceFromDb = await prisma.invoice.findUnique({
          where: { id },
          include: { lines: true },
        });

        if (!invoiceFromDb) {
          return {
            success: false,
            error: "Invoice not found",
          };
        }
        return { success: true, data: invoiceFromDb };
      },
      300 // Cache of 5 minutes for specific invoice
    );

    return invoice;
  } catch (error) {
    return {
      success: false,
      error: `Error while trying retrieval invoice ${id}.` + error,
    };
  }
}

export async function refreshUserInvoicesCache(userId: string): Promise<void> {
  // Supprime tout le cache lié à cet utilisateur
  serverCache.deleteByPattern(`invoices:user:${userId}`);
  serverCache.deleteByPattern(`invoice:user:${userId}`);
  console.log(`🔄 Cache rafraîchi pour l'utilisateur: ${userId}`);
}
