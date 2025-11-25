/**
 * InputsTypes
 * @property {string} invoiceName - The name of the invoice.
 */
export type InputsTypes = {
  invoiceName: string;
};

/**
 * InvoiceLine
 * @property {string} description - The description of the invoice line.
 * @property {number} quantity - The quantity of the invoice line.
 * @property {number} unitPrice - The unit price of the invoice line.
 * @property {number} total - The total of the invoice line.
 */
export type InvoiceLine = {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
};
