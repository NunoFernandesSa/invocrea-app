import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../shadcn/ui/card";

export default function LatePaymentInvoiceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <p className="text-3xl font-bold text-red-500">00.00 €</p>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription>
          <p className="text-lg font-semibold">Retard de paiement</p>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
