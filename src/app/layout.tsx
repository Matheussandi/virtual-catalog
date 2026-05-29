import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ProductsProvider } from "@/context/ProductsProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catálogo Virtual | Laboratório Cursor",
  description:
    "Catálogo de produtos com dados mockados e laboratório educacional de Rules, Skills e MCP no Cursor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ProductsProvider>{children}</ProductsProvider>
      </body>
    </html>
  );
}
