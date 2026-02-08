import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // <--- INI KABEL PENTINGNYA! JANGAN HILANG

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cardicare Command Center",
  description: "Mawapres 2026 Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}