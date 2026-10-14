import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Ubuntu } from "next/font/google";
import { PlanProvider } from "./context/PlanContext";
import { Toaster } from "react-hot-toast";

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
      <body className={`${poppins.className}`}>
        <PlanProvider>{children}</PlanProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2500,
            style: {
              background: "#1a1d24",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              fontSize: "14px",
            },
            success: {
              iconTheme: { primary: "#c6ff00", secondary: "#0b0c0e" },
            },
            error: {
              iconTheme: { primary: "#ff5c5c", secondary: "#0b0c0e" },
            },
          }}
        />
      </body>
    </html>
  );
}
