import React from "react";
import { Badge } from "@/src/components/shadcn/ui/badge";
import { GoIssueClosed } from "react-icons/go";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { BsSendExclamation } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function StatusBadge({ status }: { status: string }) {
  // Brouillon = 1, Envoyée = 2, Validée = 3, En Attente: 4, Payée = 5 , Annulée = 6, Impayée = 7
  switch (status) {
    case "1":
      return (
        <Badge className="gap-1">
          <IoDocumentTextOutline />
          Brouillon
        </Badge>
      );
    case "2":
      return (
        <Badge variant={"secondary"} className="gap-1">
          <BsSendExclamation />
          Envoyée
        </Badge>
      );
    case "3":
      return (
        <Badge
          variant={"outline"}
          className="bg-green-800 text-white dark:bg-green-800 gap-1"
        >
          <FaRegCheckCircle />
          Validée
        </Badge>
      );
    case "4":
      return (
        <Badge
          variant={"outline"}
          className="bg-blue-500 text-white dark:bg-blue-600 gap-1"
        >
          <IoMdTime />
          En attente
        </Badge>
      );
    case "5":
      return (
        <Badge
          variant={"outline"}
          className="bg-green-500 text-white dark:bg-green-500 gap-1"
        >
          <GoIssueClosed />
          Payée
        </Badge>
      );
    case "6":
      return (
        <Badge
          variant={"outline"}
          className="bg-red-500 text-white dark:bg-red-600 gap-1"
        >
          <IoMdCloseCircleOutline />
          Annulée
        </Badge>
      );
    case "7":
      return (
        <Badge variant={"destructive"} className="gap-1">
          <IoMdCloseCircleOutline />
          Impayée
        </Badge>
      );
    default:
      return <Badge>A définir</Badge>;
  }
}
