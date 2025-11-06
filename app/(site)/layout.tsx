import "../../styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Hasan Memiş – Portfolio", template: "%s | Hasan Memiş" },
  description: "Software Engineer • Data & AI • Computer Vision • BI",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    type: "website",
    title: "Hasan Memiş – Portfolio",
    description: "Data & AI projects and case studies",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
