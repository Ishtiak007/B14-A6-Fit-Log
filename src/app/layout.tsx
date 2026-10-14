import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Ubuntu } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Almatin Portfolio",
  description: "This is my portfolio Webiste",
  keywords: ["Portfolio Website", "Identity", "cv", "Personal Website"],
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
  publisher: "Almatin",
  authors: [
    {
      name: "Almatin",
      url: "https://www.facebook.com/almatin",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
