import { getInvoiceById } from "@/lib/actions/invoice-actions";
import Container from "@/src/components/common/Container";
import StatusBadge from "@/src/components/features/dashboard/invoices/StatusBadge";
import GoBackButton from "@/src/components/features/invoices/GoBackButton";
import { Card } from "@/src/components/shadcn/ui/card";
import { InvoiceDetailsProps } from "@/src/types/invoice-details-props-types";
import { CiWarning } from "react-icons/ci";

export default async function InvoiceDetails({ params }: InvoiceDetailsProps) {
  const { id } = await params;

  // get invoice by id
  const invoice = await getInvoiceById(id);

  // invoice infos for better display
  const invoiceId = invoice?.data?.id;
  const invoiceName = invoice?.data?.name;
  const invoiceCreatedAt = invoice?.data?.createdAt
    .toLocaleDateString()
    .toString();
  const invoiceStatus = invoice?.data?.status.toString();

  return (
    <Container>
      <GoBackButton href={`dashboard`} />

      {invoice.success ? (
        <div className="mt-10">
          <h1>Invoice : {invoiceId}</h1>
          <div className="">name: {invoiceName}</div>
          <div className="">created at: {invoiceCreatedAt}</div>
          <div className="">
            status: <StatusBadge status={invoiceStatus || ""} />
          </div>
        </div>
      ) : (
        <Card className="mt-10 flex flex-col items-center justify-center p-6 text-red-500">
          <CiWarning className="mb-3 h-10 w-10" />
          <h2 className="mb-2 text-xl font-semibold">Facture non trouvée!</h2>
          <p className="text-center">
            La facture avec l'ID "{id}" n'a pas pu être trouvée.
          </p>
          <p className="text-center">Veuillez vérifier l'ID et réessayer.</p>
        </Card>
      )}
    </Container>
  );
}
