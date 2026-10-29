import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-display" });

export const metadata: Metadata = {
  title: "ConstruFavela 2026",
  description: "A maior feira de construção civil de favela do Brasil. 04 e 05 de novembro, das 9h às 17h, no Pavilhão Social G10 Favelas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${bebas.variable} bg-ink text-white`}>{children}</body>
      <Analytics />
    </html>
  );
}
