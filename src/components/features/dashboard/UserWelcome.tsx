"use client";

// ----- Clerk -----
import { useUser } from "@clerk/nextjs";

// ----- React -----
import { JSX } from "react";

/**
 * UserWelcome component
 *
 * A welcome message component that displays a message to the user.
 * It uses the useUser hook from @clerk/nextjs to get the user data.
 * If the user is not null, it displays the message with the user's full name.
 *
 * @returns {JSX.Element} The welcome message component.
 */
export default function UserWelcome(): JSX.Element {
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
