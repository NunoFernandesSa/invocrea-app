import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "InvocreaApp",
  description:
    "Générateur de factures en ligne : simple, rapide et professionnel. Créez et téléchargez vos devis et factures en PDF en quelques clics. Conforme à la loi, sans inscription.",
};

// clerk ---------------------------------------------------------------------
import { ClerkProvider } from "@clerk/nextjs";
import NavigationBar from "../components/features/navigation-bar/NavigationBar";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The root layout component.
 *
 * This component wraps the entire app with the ClerkProvider
 * and applies the Inter font to the body.
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
        <body className={`${lato.className} antialiased`}>
          {/* Navigation */}
          <NavigationBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
