import Container from "@/src/components/common/Container";
import GoBackButton from "@/src/components/features/invoices/GoBackButton";
import { Button } from "@/src/components/shadcn/ui/button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default async function InvoiceDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
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
