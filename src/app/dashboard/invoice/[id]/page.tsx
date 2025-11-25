import Container from "@/src/components/common/Container";
import GoBackButton from "@/src/components/features/invoices/GoBackButton";
import { InvoiceDetailsProps } from "@/src/types/invoice-details-props-types";

export default async function InvoiceDetails({ params }: InvoiceDetailsProps) {
  const { id } = await params;

  return (
    <Container>
      <GoBackButton href={`dashboard`} />

      <div className="mt-10">
        <h1>Invoice : {id}</h1>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </Container>
  );
}
