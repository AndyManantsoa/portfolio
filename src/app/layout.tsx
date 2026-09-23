import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { DesktopCursor } from "@/components/cursor/DesktopCursor";
import { AppBackground } from "@/components/background/AppBackground";
import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { Footer } from "@/components/layout/Footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andyportfolio.dev"),
  title: "Andy - Developer × Security Researcher",
  description:
    "Software Developer and Cybersecurity Enthusiast. Build. Break. Understand.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andyportfolio.dev",
    siteName: "Andy Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bricolage.variable} ${ibmPlexMono.variable} dark scroll-smooth`}
    >
      <body className="antialiased">
        <AppBackground />
        <DesktopCursor />
        <FloatingNavbar />
        <main className="app-content min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
