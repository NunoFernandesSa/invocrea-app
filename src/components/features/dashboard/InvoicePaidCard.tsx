import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../shadcn/ui/card";

export default function InvoicePaidCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <p className="text-3xl font-bold">0</p>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription>
          <p className="text-lg font-semibold">Facture encaissée</p>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
