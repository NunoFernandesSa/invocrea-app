import Container from "@/src/components/common/Container";
import UserWelcome from "@/src/components/features/dashboard/UserWelcome";
import { Button } from "@/src/components/shadcn/ui/button";
import { Card } from "@/src/components/shadcn/ui/card";
import Link from "next/link";
import { BsEye } from "react-icons/bs";

export default async function DashboardPage(): Promise<JSX.Element> {
  return (
    <Container>
      <UserWelcome text="Ceci est votre Dashboard où vous pouvez gérer vos factures." />

      <div className="md:p-6 p-2 rounded-lg shadow-md mt-6 bg-accent">
        <Link href="/dashboard/invoice" className="text-primary underline">
          <Button variant={"default"}>
            Mes factures <BsEye className="ml-2" />
          </Button>
        </Link>
      </div>
    </Container>
  );
}
