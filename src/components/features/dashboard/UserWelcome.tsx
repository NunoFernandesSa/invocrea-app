"use client";

import { useUser } from "@clerk/nextjs";

export default function UserWelcome() {
  const user = useUser();
  return (
    user && (
      <div>
        <h2 className="text-xl font-bold mb-4 mt-10">
          Bienvenue {user.user?.fullName}!
        </h2>
        <p>Ceci est votre tableau de bord où vous pouvez gérer vos factures.</p>
      </div>
    )
  );
}
