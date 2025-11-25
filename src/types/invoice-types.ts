/**
 * EmptyInvoice
 * @property {string} id - The id of the empty invoice.
 * @property {string} name - The name of the empty invoice.
 * @property {string} userId - The user id of the empty invoice.
 * @property {Date} createdAt - The created at of the empty invoice.
 * @property {Date | null} updatedAt - The updated at of the empty invoice.
 * @property {string} error - The error of the empty invoice.
 */
export type EmptyInvoice = {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date | null;
  error?: string;
};

/**
 * NewInvoiceFormProps
 * @property {function} createEmptyInvoiceAction - The create empty invoice action.
 */
export type NewInvoiceFormProps = {
  createEmptyInvoiceAction: (
    userEmail: string,
    invoiceName: string
  ) => Promise<{ success: boolean; data?: EmptyInvoice; error?: string }>;
};

/**
 * Invoice
 * @property {string} id - The id of the invoice.
 * @property {string} name - The name of the invoice.
 * @property {string} issuerName - The issuer name of the invoice.
 * @property {string} issuerAddress - The issuer address of the invoice.
 * @property {string} clientName - The client name of the invoice.
 * @property {string} clientAddress - The client address of the invoice.
 * @property {string} invoiceDate - The invoice date of the invoice.
 * @property {string} dueDate - The due date of the invoice.
 * @property {boolean} vatActive - The vat active of the invoice.
 * @property {number} vatRate - The vat rate of the invoice.
 * @property {number} status - The status of the invoice.
 * @property {Date} createdAt - The created at of the invoice.
 * @property {Date | null} updatedAt - The updated at of the invoice.
 * @property {InvoiceLine[]} lines - The lines of the invoice.
 * @property {string} userId - The user id of the invoice.
 */
export type Invoice = {
  id: string;
  name: string;
  issuerName: string;
  issuerAddress: string;
  clientName: string;
  clientAddress: string;
  invoiceDate: string;
  dueDate: string;
  vatActive: boolean;
  vatRate: number;
  status: number;
  createdAt: Date;
  updatedAt: Date | null;
  lines: InvoiceLine[];
  userId: string;
};

/**
 * InvoiceLine
 * @property {string} id - The id of the invoice line.
 * @property {string} description - The description of the invoice line.
 * @property {number} quantity - The quantity of the invoice line.
 * @property {number} unitPrice - The unit price of the invoice line.
 * @property {Date} createdAt - The created at of the invoice line.
 * @property {Date | null} updatedAt - The updated at of the invoice line.
 * @property {string | null} invoiceId - The invoice id of the invoice line.
 */
export type InvoiceLine = {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  createdAt: Date;
  updatedAt: Date | null;
  invoiceId: string | null;
};
