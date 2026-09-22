import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppBackground } from "@/components/background/AppBackground";
import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="antialiased">
        <AppBackground />
        <FloatingNavbar />
        <main className="app-content min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
