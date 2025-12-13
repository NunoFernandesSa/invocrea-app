"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../shadcn/ui/card";
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
    <Card>
      <CardHeader>
        <CardTitle>
          <p className="text-3xl font-bold">
            {clientsLenght ? clientsLenght : 0}
          </p>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription>
          <p className="text-lg font-semibold">Clients</p>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
