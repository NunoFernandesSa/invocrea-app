import { auth } from "@clerk/nextjs/server";
import { Card } from "../../shadcn/ui/card";
import { getAllInvoicesByUserId } from "@/lib/actions/invoice-actions";

export default async function InvoiceCard() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const invoices = await getAllInvoicesByUserId(userId);

  return (
    <>
      {invoices.map((invoice) => (
        <Card
          key={invoice.id.toString()}
          className="w-80 flex items-center justify-center"
        >
          <p className="font-bold">{invoice.name}</p>
        </Card>
      ))}
    </>
  );
}
