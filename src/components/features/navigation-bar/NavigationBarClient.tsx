"use client";

import { useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Container from "../../common/Container";
import { Button } from "../../shadcn/ui/button";

export default function NavigationBarClient() {
  const { user } = useUser();

  useEffect(() => {
    const syncUser = async () => {
      if (user?.primaryEmailAddress?.emailAddress && user.fullName) {
        try {
          await fetch("/api/sync-user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.primaryEmailAddress.emailAddress,
              fullName: user.fullName,
            }),
          });
        } catch (error) {
          console.error("Error syncing user:", error);
        }
      }
    };

    syncUser();
  }, [user]);

  return (
    <nav className="border-b border-border bg-card">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="py-2 px-3 rounded-md bg-linear-to-r from-primary to-primary/60 flex items-center justify-center text-white text-xl font-bold">
            Invocrea
          </div>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline" size="default">
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button variant="default" size="default">
                Get Started
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Container>
    </nav>
  );
}
