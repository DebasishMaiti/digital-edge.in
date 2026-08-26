import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WooCommerce Development Company in India | DE360",
  description: "WooCommerce and WordPress website development services in India — secure, fast and built to convert for any business.",
  alternates: {
    canonical: "https://digitaledge360.in/woocommerce/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
