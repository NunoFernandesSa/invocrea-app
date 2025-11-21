import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="fr" suppressHydrationWarning>
        <body className={`${lato.className} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {/* Navigation */}
            <NavigationBar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
