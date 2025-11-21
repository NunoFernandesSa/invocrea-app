import { auth } from "@clerk/nextjs/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../shadcn/ui/card";
import { getAllInvoicesByUserId } from "@/lib/actions/invoice-actions";

export default async function InvoiceCard() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const invoices = await getAllInvoicesByUserId(userId);

  return (
    <>
      {invoices.length === 0 && <p>Aucune facture pour le moment...</p>}
      {invoices.map((invoice) => (
        <Card key={invoice.id.toString()} className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>{invoice.id}</CardTitle>
            <CardDescription>{invoice.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <p></p>
          </CardContent>
          <CardFooter className="flex-col gap-2"></CardFooter>
        </Card>
      ))}
    </>
  );
}
