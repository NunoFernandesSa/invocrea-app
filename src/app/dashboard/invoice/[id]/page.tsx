"use client";

import Container from "@/src/components/common/Container";
import GoBackButton from "@/src/components/features/invoices/GoBackButton";
import { InvoiceDetailsProps } from "@/src/types/invoice-details-props-types";
import { Invoice } from "@/src/types/invoice-types";
import { fetchInvoice } from "@/src/utils/fetch-invoice";
import { useEffect, useState } from "react";

export default function InvoiceDetails({ params }: InvoiceDetailsProps) {
  const [invoice, setInvoice] = useState<Invoice | null>(null);

  useEffect(() => {
    fetchInvoice(params).then((invoice) => setInvoice(invoice));
  }, [params]);

  if (!invoice) {
    return <p>Loading...</p>;
  }

  return invoice ? (
    <Container>
      <GoBackButton href={`dashboard`} />

      <p>{invoice?.id}</p>
    </Container>
  ) : (
    <p>Invoice not found</p>
  );
}
