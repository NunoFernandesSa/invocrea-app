// ----- Clerk -----
import { auth } from "@clerk/nextjs/server";

// ----- shadcn/ui -----
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/shadcn/ui/card";

// ----- custom actions -----
import { getAllInvoicesByUserId } from "@/lib/actions/invoice-actions";

// ----- icons -----
import { IoTimeOutline } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";

// ----- custom components -----
import StatusBadge from "./StatusBadge";

// ----- Next.js -----
import Link from "next/link";

// ----- custom utils -----
import { calculateTotalInvoice } from "@/src/utils/calculate-total-invoice";

/**
 * InvoiceCard component
 * Displays a card with a list of invoices belonging to a specific user
 * @returns { Promise<JSX.Element> | null } - A JSX element representing the invoice card, or null if no invoices are found
 */
export default async function InvoiceCard(): Promise<JSX.Element | null> {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const response = await getAllInvoicesByUserId(userId);
  const invoices = response.data;

  // if no invoices found return a message to create an invoice
  if (
    !invoices ||
    invoices.length === 0 ||
    !response.success ||
    response === undefined
  ) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-12 text-center">
        <div className="text-muted-foreground mb-4">
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
          <CardHeader className="pb-0 mb-1">
            <CardTitle className="">
              <div className="flex items-center justify-between gap-3 mb-2">
                {/* invoice id */}
                <Link
                  href={`/dashboard/invoice/${invoice.id}`}
                  className="hover:underline hover:text-muted-foreground ease-in-out duration-200"
                  title="Voir détail de la facture"
                >
                  <p className="font-semibold text-lg flex items-center gap-1">
                    <CiFileOn />
                    {invoice.id}
                  </p>
                </Link>
                {/* invoice status */}
                <span className={`text-xs px-2 py-1 rounded-full`}>
                  <StatusBadge status={invoice.status.toString()} />
                </span>
              </div>
            </CardTitle>
            <CardDescription>
              {/* invoice client name */}
              <p className="text-muted-foreground mb-2 text-sm">
                {invoice.clientName}
              </p>
              <div className="flex items-center justify-between gap-6">
                {/* invoice creation date */}
                <span className="text-muted-foreground flex items-center gap-1 text-sm">
                  <IoTimeOutline />
                  {invoice.createdAt.toISOString().split("T")[0]}
                </span>
                {/* invoice total */}
                <div className="flex items-center text-sm">
                  <span className="font-semibold text-muted-foreground text-lg">
                    {calculateTotalInvoice(invoice).totalTTC.toFixed(2)}
                  </span>
                  <span className="font-semibold text-muted-foreground text-lg flex items-center ms-1">
                    €
                  </span>
                </div>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}
