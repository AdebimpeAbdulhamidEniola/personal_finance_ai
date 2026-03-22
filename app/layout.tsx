import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Toaster } from "sonner";
import StructuredData from "@/components/seo/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mykudi.vercel.app'),
  title: "FinTrack – AI Personal Finance Dashboard | Budget Tracking & Expense Management",
  description: "Transform your financial life with AI-powered personal finance management. Track expenses, manage budgets, and get smart insights to achieve your financial goals.",
  keywords: "personal finance, AI finance dashboard, budget tracking, expense management, financial planning, money management, budget app, expense tracker",
  authors: [{ name: "FinTrack Team" }],
  openGraph: {
    title: "FinTrack – AI Personal Finance Dashboard",
    description: "AI-powered personal finance management with smart budget tracking and expense insights",
    type: "website",
    url: "https://mykudi.vercel.app",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FinTrack AI Finance Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTrack – AI Personal Finance Dashboard",
    description: "AI-powered personal finance management with smart budget tracking",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
