import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Digital Edge 360° | Digital Marketing Agency in India",
  description: "Award-winning digital marketing agency in India offering web development, app development, SEO, PPC and social media marketing services.",
  alternates: {
    canonical: "https://digitaledge360.in",
  },
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
      {/* <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head> */}
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
