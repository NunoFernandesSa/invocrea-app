import { createEmptyInvoice } from "@/lib/actions/invoice-actions";
import BackButton from "@/src/components/common/BackButton";
import Container from "@/src/components/common/Container";
import InvoiceList from "@/src/components/features/invoices/InvoiceList";
import { NewInvoiceForm } from "@/src/forms/NewInvoiceForm";
import { Suspense } from "react";

/**
 * Renders the main dashboard page, displaying a user welcome,
 * a form to create new invoices, and a list of existing invoices.
 * This is an asynchronous server component.
 * @returns {Promise<JSX.Element>} The Dashboard page component.
 */
export default async function InvoicesPage(): Promise<JSX.Element> {
  return (
    <Container>
      <div className="md:p-6 p-2 rounded-lg shadow-md mt-6 bg-accent">
        <div className="w-full mb-10 flex items-center justify-center md:justify-start">
          <BackButton linkTo="/dashboard" />
          <NewInvoiceForm createEmptyInvoiceAction={createEmptyInvoice} />
        </div>

        {/* invoice list */}
        <Suspense
          fallback={
            <div className="font-semibold text-sm">
              Chargement des factures...
            </div>
          }
        >
          <InvoiceList />
        </Suspense>
      </div>
    </Container>
  );
}
