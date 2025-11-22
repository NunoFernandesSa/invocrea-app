import { prisma } from "@/lib/prisma";
import { randomBytes } from "crypto";

/**
 * Generates a unique invoice ID in the format of <year>-<6-digit hexadecimal string>
 * This function will keep generating new IDs until it finds one that is not already in use in the database.
 * @returns {Promise<string>} A unique invoice ID.
 */
export const generateUniqueInvoiceID = async () => {
  let uniqueId;
  let isUnique: boolean = false;

  const year = new Date().getFullYear().toString();

  while (!isUnique) {
    uniqueId = `${year}-${randomBytes(3).toString("hex").toUpperCase()}`;

    const existingInvoiceID = await prisma.invoice.findUnique({
      where: { id: uniqueId },
    });

    if (!existingInvoiceID) {
      isUnique = true;
    }
  }

  return uniqueId;
};
