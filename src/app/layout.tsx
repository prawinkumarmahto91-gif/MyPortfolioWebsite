import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { hasResume } from "@/lib/resume";
import { profile } from "@/data/profile";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description =
  "Portfolio of Prawin Kumar, an aspiring AI/ML engineer and IT student working on machine learning, deep learning, and computer vision projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} | Aspiring AI/ML Engineer`,
  description,
  openGraph: {
    title: `${profile.name} | Aspiring AI/ML Engineer`,
    description,
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    type: "website",
  },
  twitter: { card: "summary", title: `${profile.name} | Aspiring AI/ML Engineer`, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar showResume={hasResume()} />
        {children}
        <Footer />
      </body>
    </html>
  );
}