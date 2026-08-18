import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title:
    "Digital Edge 360° - Digital Marketing Agency & Web/app Development Company",
  description:
    "Digital Edge 360° delivers result-driven digital marketing and innovative web and mobile app development services. From SEO, Google Ads, and social media marketing to responsive websites, eCommerce platforms, and custom applications, we help businesses build a strong digital presence and achieve sustainable growth.",
  icons: {
    icon: "/icon.png",
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased">
        <ScrollToTop />
        <CustomCursor />
        <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
