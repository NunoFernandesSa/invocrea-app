"use client";

import React, { useEffect, useState } from "react";
import { Card } from "../../shadcn/ui/card";
import GoToLink from "../../common/GoToLink";
import { BsEye } from "react-icons/bs";
import { useUser } from "@clerk/nextjs";

export default function ClientsCountCard() {
  const user = useUser();
  const [clientsLenght, setClientsLength] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {}, [user]);

  return (
    <Card className="flex flex-col gap-3 items-start justify-center p-3 md:p-6">
      <div className="flex w-full items-center justify-between">
        <p className="text-lg font-semibold">Mes Clients</p>
        <GoToLink text="" icon={<BsEye />} href="/dashboard/client" />
      </div>

      <p className="text-3xl font-bold">{clientsLenght ? clientsLenght : 0}</p>
    </Card>
  );
}
