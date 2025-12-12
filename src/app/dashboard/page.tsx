import Container from "@/src/components/common/Container";
import UserWelcome from "@/src/components/features/dashboard/UserWelcome";

export default async function DashboardPage(): Promise<JSX.Element> {
  return (
    <Container>
      <UserWelcome text="Ceci est votre Dashboard où vous pouvez gérer vos factures." />

      <div className="mt-10"></div>
    </Container>
  );
}
