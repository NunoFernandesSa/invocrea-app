"use client";

import React, { useEffect, useState } from "react";
import GoToLink from "../../common/GoToLink";
import { BsEye } from "react-icons/bs";
import { getAllInvoicesByUserId } from "@/lib/actions/invoice-actions";
import { useUser } from "@clerk/nextjs";
import { Card } from "../../shadcn/ui/card";

export default function InvoicesCountCard() {
  const user = useUser();
  const [invoicesDataLenght, setInvoicesData] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchInvoices = async () => {
      const data = await getAllInvoicesByUserId(user?.user?.id || "");
      setInvoicesData(data?.data?.length);
    };

    fetchInvoices();
  }, [user]);
  return (
    <Card className="flex flex-col gap-3 items-start justify-center p-3 md:p-6">
      <p className="text-3xl font-bold">
        {invoicesDataLenght ? invoicesDataLenght : 0}
      </p>
      <div className="flex w-full items-center justify-between">
        <p className="text-lg font-semibold">Factures</p>
        <GoToLink text="" icon={<BsEye />} href="/dashboard/invoice" />
      </div>
    </Card>
  );
}
