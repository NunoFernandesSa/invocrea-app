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
 * @param {{ text: string }} Props for the UserWelcome component.
 * @returns {JSX.Element} The welcome message component.
 */
export default function UserWelcome({ text }: { text: string }): JSX.Element {
  const user = useUser();

  return (
    user && (
      <div>
        <h2 className="text-xl font-bold mb-4 mt-10">
          {/* Display the user's full name if it exists */}
          {user?.user?.fullName && (
            <span className="text-primary">
              Bienvenue {user.user?.fullName}!
            </span>
          )}
        </h2>
        <p>{text}</p>
      </div>
    )
  );
}
