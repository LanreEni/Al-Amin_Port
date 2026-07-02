// src/app/layout.tsx
import "./globals.css";
import Background from "./components/Background";

import ClientLayout from "./components/ClientLayout";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Oseni Al‑Amin Olanrewaju – Portfolio",
    template: "%s – Al‑Amin Oseni",
  },
  description: "Personal portfolio website of Oseni Al‑Amin Olanrewaju, showcasing full-stack backend development, scalable software engineering architecture, and applied machine learning.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans bg-white text-slate-900 antialiased min-h-screen flex flex-col">
        <Background />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
