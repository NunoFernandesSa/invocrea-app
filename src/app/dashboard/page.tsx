import Container from "@/src/components/common/Container";
import GoToLink from "@/src/components/common/GoToLink";
import Section from "@/src/components/common/Section";
import UserWelcome from "@/src/components/features/dashboard/UserWelcome";
import { BsEye } from "react-icons/bs";

export default async function DashboardPage(): Promise<JSX.Element> {
  return (
    <Container>
      <UserWelcome text="Ceci est votre Dashboard où vous pouvez gérer vos factures." />

      <Section>
        <div className="flex gap-3 flex-wrap items-center">
          <GoToLink
            text="Mes factures"
            icon={<BsEye />}
            href="/dashboard/invoice"
          />
          <GoToLink
            text="Mes clients"
            icon={<BsEye />}
            href="/dashboard/client"
          />
        </div>
      </Section>
    </Container>
  );
}
