import { Invoice } from "./invoice-types";

export type InvoiceInfoProps = {
  invoice: Invoice;
  setInvoice: (invoice: Invoice) => void;
};
