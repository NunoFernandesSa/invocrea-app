"use client";

import Container from "@/src/components/common/Container";
import { NewInvoiceForm } from "@/src/forms/NewInvoiceForm";
import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const user = useUser();

  return (
    <Container>
      {/* show user name is signed in */}
      {user && (
        <div>
          <h2 className="text-xl font-bold mb-4 mt-10">
            Bienvenue {user.user?.fullName}!
          </h2>
          <p>
            Ceci est votre tableau de bord où vous pouvez gérer vos factures.
          </p>
        </div>
      )}

      <div className="p-6 rounded-lg shadow-md mt-6 bg-accent">
        {/* add invoice button */}
        <div className="w-full mb-10">
          <NewInvoiceForm />
        </div>

        {/* invoice list */}
        <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-4"></div>
      </div>
    </Container>
  );
}
