"use client";

import { SignIn, SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface AuthModalProps {
  mode: "sign-in" | "sign-up";
}

export function AuthModal({ mode }: AuthModalProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div
        className="rounded-lg w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {mode === "sign-in" ? (
          <SignIn
            routing="virtual"
            fallbackRedirectUrl="/dashboard"
            signUpUrl="/sign-up"
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-xl rounded-lg",
                modalCloseButton: "text-gray-500 hover:text-gray-700 text-xl",
                headerTitle: "text-xl font-semibold",
                headerSubtitle: "text-gray-600",
                socialButtonsBlockButton:
                  "border border-gray-300 hover:bg-gray-50",
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
                footerActionLink: "text-blue-600 hover:text-blue-800",
              },
            }}
          />
        ) : (
          <SignUp
            routing="virtual"
            fallbackRedirectUrl="/dashboard"
            signInUrl="/sign-in"
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-xl rounded-lg",
                modalCloseButton: "text-gray-500 hover:text-gray-700 text-xl",
                headerTitle: "text-xl font-semibold",
                headerSubtitle: "text-gray-600",
                socialButtonsBlockButton:
                  "border border-gray-300 hover:bg-gray-50",
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
                footerActionLink: "text-blue-600 hover:text-blue-800",
              },
            }}
          />
        )}
      </div>
    </div>
  );
}
