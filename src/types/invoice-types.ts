export type EmptyInvoice = {
  id: string;
  name: string;
  userId: string;
};

export type NewInvoiceFormProps = {
  createEmptyInvoiceAction: (
    userEmail: string,
    invoiceName: string
  ) => Promise<EmptyInvoice>;
};

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

export type InvoiceLine = {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  createdAt: Date;
  updatedAt: Date | null;
  invoiceId: string | null;
};
