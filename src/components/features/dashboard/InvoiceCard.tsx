import { auth } from "@clerk/nextjs/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../shadcn/ui/card";
import { Button } from "../../shadcn/ui/button";
import { getAllInvoicesByUserId } from "@/lib/actions/invoice-actions";

// ----- icons -----
import { PencilLine } from "lucide-react";
import { Eye } from "lucide-react";

export default async function InvoiceCard() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const invoices = await getAllInvoicesByUserId(userId);

  if (!invoices || invoices.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-12 text-center">
        <div className="text-muted-foreground mb-4">
          {/* Vous pouvez ajouter une icône ici si vous voulez */}
          <svg
            className="w-16 h-16 mx-auto mb-4 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Aucune facture</h3>
        <p className="text-muted-foreground max-w-md">
          Vous n'avez pas encore créé de facture. Commencez par créer votre
          première facture pour la voir apparaître ici.
        </p>
      </div>
    );
  }

  return (
    <>
      {invoices.map((invoice) => (
        <Card key={invoice.id.toString()} className="w-auto">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className={`text-lg font-semibold`}>
                {invoice.lines && invoice.lines.length > 0 ? (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground"></span>
                    <span className="font-semibold">€</span>
                  </div>
                ) : (
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">€</span>
                  </div>
                )}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full`}>
                {invoice.status.toString().toUpperCase()}
              </span>
            </CardTitle>
            <CardDescription>
              <span className="font-semibold">{invoice.id}</span>
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground"> {invoice.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{invoice.dueDate}</span>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end gap-2">
            <Button variant="ghost" size="icon">
              <Eye />
            </Button>
            <Button variant="ghost" size="icon">
              <PencilLine />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
