import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Markets | CultureRoots",
  description: "Connect with diverse audiences across the US, UK, Canada, Australia, and New Zealand with our specialized regional market strategies.",
  keywords: "global markets, multicultural marketing regions, US, UK, Canada, Australia, New Zealand marketing",
};

export default function CountriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
