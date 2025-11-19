import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InvocreaApp",
  description:
    "Générateur de factures en ligne : simple, rapide et professionnel. Créez et téléchargez vos devis et factures en PDF en quelques clics. Conforme à la loi, sans inscription.",
};

// clerk ---------------------------------------------------------------------
import { ClerkProvider } from "@clerk/nextjs";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The root layout component.
 *
 * This component wraps the entire app with the ClerkProvider
 * and applies the Geist Sans and Geist Mono fonts to the body.
 *
 * @param {React.ReactNode} children - The children of the root layout.
 * @returns {JSX.Element} The root layout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="fr" className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
