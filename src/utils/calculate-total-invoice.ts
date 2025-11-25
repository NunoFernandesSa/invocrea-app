// calculate-total-invoice.ts
import { Invoice } from "../types/invoice-types";

/**
 * Calculates the total amounts (HT, TVA, and TTC) for a given invoice.
 * It iterates through each line item, sums up the product of quantity and unit price for the total HT,
 * then calculates the total TVA based on the invoice's VAT rate, and finally the total TTC.
 * @param invoice The invoice object containing lines and VAT rate.
 * @returns An object with `totalHT` (total before tax), `totalTVA` (total VAT amount), and `totalTTC` (total including tax).
 */
export const calculateTotalInvoice = (invoice: Invoice) => {
  const totalHT = invoice.lines.reduce((acc, line) => {
    const quantity = line.quantity ?? 0;
    const unitPrice = line.unitPrice ?? 0;

    return acc + quantity * unitPrice;
  }, 0);

  const totalTVA = totalHT * (invoice.vatRate / 100);

  const totalTTC = totalHT + totalTVA;

  return { totalHT, totalTVA, totalTTC };
};
