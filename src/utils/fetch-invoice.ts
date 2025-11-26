import { getInvoiceById } from "@/lib/actions/invoice-actions";

export const fetchInvoice = async (params: Promise<{ id: string }>) => {
  const invoiceData = await getInvoiceById((await params).id);

  if (!invoiceData.success) {
    throw new Error(invoiceData.error);
  }

  if (!invoiceData.data) {
    throw new Error("Invoice not found");
  }

  return invoiceData.data;
};
