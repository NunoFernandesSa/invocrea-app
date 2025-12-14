import Container from "@/src/components/common/Container";
import GoToLink from "@/src/components/common/GoToLink";
import Section from "@/src/components/common/Section";
import ClientsCountCard from "@/src/components/features/dashboard/ClientsCountCard";
import DashboardCard from "@/src/components/features/dashboard/DashboardCard";
import DashboardHeader from "@/src/components/features/dashboard/DashboardHeader";
import InvoicePaidCard from "@/src/components/features/dashboard/InvoicePaidCard";
import InvoicesCountCard from "@/src/components/features/dashboard/InvoicesCountCard";
import LatePaymentInvoiceCard from "@/src/components/features/dashboard/LatePaymentInvoiceCard";
import TotalRevenueInvoicesCard from "@/src/components/features/dashboard/TotalRevenueInvoicesCard";
import { FaFile } from "react-icons/fa";

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
        text="Vue d'ensemble de vos factures et clients."
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

      <Section className="py-6">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardCard
              icon={<FaFile />}
              title="Factures"
              content="3"
              desc="Nombre total de factures créées"
              cardClassName="bg-gradient-to-br from-gray-900 to-blue-900 rounded-lg p-6 shadow-lg"
            />

            <DashboardCard
              icon={<FaFile />}
              title="Factures encaisées"
              content="0"
              desc="Nombre total de factures encaissées"
              cardClassName="bg-gradient-to-br from-gray-900 to-green-900 rounded-lg p-6 shadow-lg"
            />

            <DashboardCard
              icon={<FaFile />}
              title="Clients"
              content="0"
              desc="Nombre total de clients créés"
              cardClassName="bg-gradient-to-br from-gray-900 to-purple-900 rounded-lg p-6 shadow-lg"
            />

            <DashboardCard
              icon={<FaFile />}
              title="Retard de paiement"
              content="0"
              desc="Nombre total de factures en retard de paiement"
              cardClassName="bg-gradient-to-br from-gray-900 to-red-900 rounded-lg p-6 shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TotalRevenueInvoicesCard />
          </div>
        </div>
      </Section>
    </Container>
  );
}
