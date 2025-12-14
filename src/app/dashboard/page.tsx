import Container from "@/src/components/common/Container";
import GoToLink from "@/src/components/common/GoToLink";
import Section from "@/src/components/common/Section";
import ClientsCountCard from "@/src/components/features/dashboard/ClientsCountCard";
import DashboardHeader from "@/src/components/features/dashboard/DashboardHeader";
import InvoicePaidCard from "@/src/components/features/dashboard/InvoicePaidCard";
import InvoicesCountCard from "@/src/components/features/dashboard/InvoicesCountCard";
import LatePaymentInvoiceCard from "@/src/components/features/dashboard/LatePaymentInvoiceCard";
import TotalRevenueInvoicesCard from "@/src/components/features/dashboard/TotalRevenueInvoicesCard";

export default async function DashboardPage(): Promise<JSX.Element> {
  // Get today's date in French format
  const todayDate = new Date().toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
  });

  return (
    <Container>
      <DashboardHeader
        title="Dashboard"
        text="Vue d'emsemble de vos factures et clients."
        className="mb-6 mt-3"
      />

      <div className="w-full flex items-center gap-3">
        <GoToLink
          variant={"outline"}
          size={"sm"}
          text="Factures"
          href="/dashboard/invoice"
        />

        <GoToLink
          variant={"outline"}
          size={"sm"}
          text="Clients"
          href="/dashboard/client"
        />
      </div>

      <Section>
        <p className="font-semibold mb-3 text-muted-foreground">Dashboard</p>
        <p className="font-semibold mb-6">{todayDate.toUpperCase()}</p>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InvoicesCountCard />
            <InvoicePaidCard />
            <ClientsCountCard />
            <LatePaymentInvoiceCard />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TotalRevenueInvoicesCard />
          </div>
        </div>
      </Section>
    </Container>
  );
}
