import { Badge } from "@/src/components/shadcn/ui/badge";
import React from "react";

export default function StatusBadge({ status }: { status: string }) {
  // Brouillon = 1, Envoyée = 2, Validée = 3, En Attente: 4, Payée = 5 , Annulée = 6, Impayée = 7
  switch (status) {
    case "1":
      return <Badge>Brouillon</Badge>;
    case "2":
      return <Badge variant={"secondary"}>Envoyée</Badge>;
    case "3":
      return (
        <Badge
          variant={"outline"}
          className="bg-green-800 text-white dark:bg-green-800"
        >
          Validée
        </Badge>
      );
    case "4":
      return (
        <Badge
          variant={"outline"}
          className="bg-blue-500 text-white dark:bg-blue-600"
        >
          En attente
        </Badge>
      );
    case "5":
      return (
        <Badge
          variant={"outline"}
          className="bg-green-500 text-white dark:bg-green-500"
        >
          Payée
        </Badge>
      );
    case "6":
      return (
        <Badge
          variant={"outline"}
          className="bg-red-500 text-white dark:bg-red-600"
        >
          Annulée
        </Badge>
      );
    case "7":
      return <Badge variant={"destructive"}>Impayée</Badge>;
    default:
      return <Badge>Brouillon</Badge>;
  }
}
