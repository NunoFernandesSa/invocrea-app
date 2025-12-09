import React from "react";
import { Card } from "../../shadcn/ui/card";
import { Input } from "../../shadcn/ui/input";
import { InvoiceInfoProps } from "@/src/types/invoice-info-type-props";
import { Badge } from "../../shadcn/ui/badge";

export default function InvoiceInfo({ invoice }: InvoiceInfoProps) {
  return (
    <Card className="flex flex-col h-fit px-2 md:px-6">
      <div className="space-y-6 py-6">
        <Badge variant="secondary" className="text-lg font-semibold mb-3">
          Informations de l'émetteur
        </Badge>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <Input
            type="text"
            placeholder="Nom de l'émetteur"
            value={invoice?.issuerName}
            onChange={(e) => {}}
            className="w-full"
            required
          />

          <Input
            type="text"
            placeholder="Adresse de l'émetteur"
            value={invoice?.issuerAddress}
            onChange={(e) => {}}
            className="w-full"
            required
          />
        </div>

        <Badge variant="secondary" className="text-lg font-semibold mb-3">
          Informations du client
        </Badge>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <Input
            type="text"
            placeholder="Nom du client"
            value={invoice?.clientName}
            onChange={(e) => {}}
            className="w-full"
            required
          />

          <Input
            type="text"
            placeholder="Adresse du client"
            value={invoice?.clientAddress}
            onChange={(e) => {}}
            className="w-full"
            required
          />
        </div>
      </div>
    </Card>
  );
}
