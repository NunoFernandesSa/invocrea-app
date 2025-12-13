import React from "react";
import { Card } from "../../shadcn/ui/card";
import GoToLink from "../../common/GoToLink";
import { BsEye } from "react-icons/bs";

export default function LatePaymentInvoiceCard() {
  return (
    <Card className="flex flex-col gap-3 items-start justify-center p-3 md:p-6">
      <p className="text-3xl font-bold">....</p>
      <div className="flex w-full items-center justify-between">
        <p className="text-lg font-semibold">....</p>
        <GoToLink text="" icon={<BsEye />} href="/dashboard/client" />
      </div>
    </Card>
  );
}
