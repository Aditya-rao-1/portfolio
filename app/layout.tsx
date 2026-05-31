// app/layout.tsx

import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Adithya Rao | Portfolio",
    template: "%s | Adithya Rao",
  },
  description:
    "Portfolio of Adithya Rao, a full-stack developer building modern web apps, AI tools, and interactive interfaces.",
  applicationName: "Adithya Rao Portfolio",
  authors: [{ name: "Adithya Rao" }],
  keywords: [
    "portfolio",
    "full-stack developer",
    "next.js",
    "react",
    "typescript",
    "ai",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Adithya Rao | Portfolio",
    description:
      "Portfolio of Adithya Rao, a full-stack developer building modern web apps, AI tools, and interactive interfaces.",
    siteName: "Adithya Rao Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Adithya Rao Portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adithya Rao | Portfolio",
    description:
      "Portfolio of Adithya Rao, a full-stack developer building modern web apps, AI tools, and interactive interfaces.",
    images: ["/twitter-image.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050816" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
