export type EmptyInvoice = {
  id: String;
  name: String;
  userId: String;
};

export type NewInvoiceFormProps = {
  createEmptyInvoiceAction: (
    userEmail: string,
    invoiceName: string
  ) => Promise<EmptyInvoice>;
};

export type Invoice = {
  id: String;
  name: String;
  issuerName: String;
  issuerAddress: String;
  clientName: String;
  clientAddress: String;
  invoiceDate: String;
  dueDate: String;
  vatActive: Boolean;
  vatRate: Number;
  status: Number;
  lines: object[];
  userId: String;
};
