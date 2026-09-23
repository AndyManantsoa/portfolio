export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  year?: number;
  href?: string;
  preview?: string;
  previewWidth?: number;
  previewHeight?: number;
}

// Add Fortinet certificate URLs when available; no issue dates are assumed.
export const certifications: Certification[] = [
  {
    id: "fortinet-ns1",
    title: "Fortinet NS1",
    issuer: "Fortinet",
    category: "Security",
  },
  {
    id: "fortinet-ns2",
    title: "Fortinet NS2",
    issuer: "Fortinet",
    category: "Security",
  },
  {
    id: "aws-cloud-practitioner-essentials",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    category: "Cloud · Course completion",
    href: "/certifications/AWS-Certificate.pdf",
    preview: "/certifications/aws-preview.png",
    previewWidth: 792,
    previewHeight: 612,
  },
  {
    id: "nptel-computer-networks",
    title: "Computer Networks And Internet Protocol",
    issuer: "NPTEL",
    category: "Networking · Coursework",
    href: "/certifications/Computer%20Networks%20And%20Internet%20Protocol.pdf",
    preview: "/certifications/nptel-preview.png",
    previewWidth: 2552,
    previewHeight: 1829,
  },
];
