import { Metadata } from "next";
import ClientPortalPage from "./ClientPortalPage";

export const metadata: Metadata = {
  title: "Portal Access | Digital Edge 360°",
  description: "Secure Client and Team Portal Access",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function PortalAccessPage() {
  return <ClientPortalPage />;
}
