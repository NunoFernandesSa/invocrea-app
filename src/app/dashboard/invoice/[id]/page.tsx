import { getInvoiceById } from "@/lib/actions/invoice-actions";
import Container from "@/src/components/common/Container";
import StatusBadge from "@/src/components/features/dashboard/invoices/StatusBadge";
import GoBackButton from "@/src/components/features/invoices/GoBackButton";
import { InvoiceDetailsProps } from "@/src/types/invoice-details-props-types";

export default async function InvoiceDetails({ params }: InvoiceDetailsProps) {
  const { id } = await params;

  const invoice = await getInvoiceById(id);

  return (
    <Container>
      <GoBackButton href={`dashboard`} />

      <div className="mt-10">
        <h1>Invoice : {id}</h1>
        <div className="">name: {invoice?.name}</div>
        <div className="">
          created at: {invoice?.createdAt.toLocaleDateString().toString()}
        </div>
        <div className="">
          status: <StatusBadge status={invoice?.status.toString() || ""} />
        </div>
      </div>
    </Container>
  );
}
