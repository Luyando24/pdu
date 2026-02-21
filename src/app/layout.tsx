import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZNDMP — Zambia National Delivery & Monitoring Platform",
  description:
    "The Presidential Delivery Unit's centralized national digital delivery platform. Monitor, evaluate, and accelerate development projects across all 156 constituencies in real time.",
  keywords: [
    "Presidential Delivery Unit",
    "Zambia",
    "PDU",
    "national delivery",
    "constituency monitoring",
    "government projects",
    "ZNDMP",
  ],
  openGraph: {
    title: "ZNDMP — Zambia National Delivery & Monitoring Platform",
    description:
      "Centralized digital delivery platform enabling the PDU to monitor government projects across all constituencies in real time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
