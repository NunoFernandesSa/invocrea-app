import { createEmptyInvoice } from "@/lib/actions/invoice-actions";
import Container from "@/src/components/common/Container";
import UserWelcome from "@/src/components/features/dashboard/UserWelcome";
import { NewInvoiceForm } from "@/src/forms/NewInvoiceForm";

export default function DashboardPage() {
  return (
    <Container>
      <UserWelcome />

      <div className="p-6 rounded-lg shadow-md mt-6 bg-accent">
        {/* add invoice button */}
        <div className="w-full mb-10">
          <NewInvoiceForm createEmptyInvoiceAction={createEmptyInvoice} />
        </div>

        {/* invoice list */}
        <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-4"></div>
      </div>
    </Container>
  );
}
