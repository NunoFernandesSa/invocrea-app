import { Invoice } from "@prisma/client";

/**
 * InvoiceDetailsProps
 * @property {Promise<{ id: string }>} params - The parameters of the invoice.
 * @property {Promise<Invoice>} invoice - The invoice.
 * @property {(invoice: Invoice) => void} setInvoice - The function to set the invoice.
 */
export type InvoiceDetailsProps = {
  params: Promise<{ id: string }>;
  invoice?: Promise<Invoice>;
  setInvoice?: (invoice: Invoice) => void;
};
