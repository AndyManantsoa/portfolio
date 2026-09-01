import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";

export const metadata: Metadata = {
  title: "Contact - Get in Touch",
  description:
    "Contact me to discuss opportunities, projects, or cybersecurity topics.",
};

export default function ContactPage() {
  return <ContactHero />;
}
