export type InputsTypes = {
  invoiceName: string;
};

export type InvoiceLine = {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
};
