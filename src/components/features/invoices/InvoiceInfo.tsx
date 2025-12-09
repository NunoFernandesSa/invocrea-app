import React from "react";
import { Card } from "../../shadcn/ui/card";
import { Invoice } from "@prisma/client";
import { Input } from "../../shadcn/ui/input";

interface InvoiceInfoProps {
  invoice: Invoice;
  setInvoice?: (invoice: Invoice) => void;
}

export default function InvoiceInfo({ invoice, setInvoice }: InvoiceInfoProps) {
  return (
    <Card className="flex flex-col gap-6 p-6 mt-6 h-fit">
      <div className="py-6">
        <p className="text-lg font-semibold mb-3">Informations de l'émetteur</p>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <Input
            type="text"
            placeholder="Nom de l'émetteur"
            value={invoice?.issuerName}
            className=""
          />

          <Input
            type="text"
            placeholder="Adresse de l'émetteur"
            value={invoice?.issuerAddress}
            className=""
          />
        </div>
      </div>
    </Card>
  );
}
