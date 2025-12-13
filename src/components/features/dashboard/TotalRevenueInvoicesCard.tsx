import React from "react";
import { Card } from "../../shadcn/ui/card";

export default function TotalRevenueInvoicesCard() {
  return (
    <Card className="flex flex-col gap-3 items-start justify-center p-3 md:p-6">
      <p className="text-3xl font-bold">.... €</p>
      <div className="flex w-full items-center justify-between">
        <p className="text-lg font-semibold">Chiffre d'affaires total</p>
        {/* TODO: Add graph with data */}
      </div>
    </Card>
  );
}
