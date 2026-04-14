import type { Metadata } from "next";
import { Manrope, Red_Hat_Display, Playfair_Display, Figtree } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Billeif | Voice-to-Invoice Billing",
  description:
    "Billeif helps teams move from spoken work updates to polished invoice drafts with a warm, AI-powered billing workflow.",
  other: {
    "google-fonts": "https://fonts.googleapis.com/css2?family=Motter+Tektura:ital,wght@0,400&display=swap",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${redHatDisplay.variable} ${playfairDisplay.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>{children}</body>
    </html>
  );
}
