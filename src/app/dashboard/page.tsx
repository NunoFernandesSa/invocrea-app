import Container from "@/src/components/common/Container";
import GoToLink from "@/src/components/common/GoToLink";
import Section from "@/src/components/common/Section";
import ClientsCountCard from "@/src/components/features/dashboard/ClientsCountCard";
import InvoicesCountCard from "@/src/components/features/dashboard/InvoicesCountCard";
import UserWelcome from "@/src/components/features/dashboard/UserWelcome";
import { BsEye } from "react-icons/bs";

export default async function DashboardPage(): Promise<JSX.Element> {
  return (
    <Container>
      <UserWelcome text="Ceci est votre Dashboard où vous pouvez gérer vos factures." />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InvoicesCountCard />

          <ClientsCountCard />
        </div>
      </Section>
    </Container>
  );
}
