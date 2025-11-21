import React from "react";
import { Card } from "../../shadcn/ui/card";
import { getAllInvoices } from "@/lib/actions/invoice-actions";

export default async function InvoiceCard() {
  const invoices = await getAllInvoices();

  return (
    <>
      {invoices.map((invoice) => (
        <Card
          key={invoice.id}
          className="w-80 flex items-center justify-center"
        >
          <p className="font-bold">{invoice.name}</p>
        </Card>
      ))}
    </>
  );
}
