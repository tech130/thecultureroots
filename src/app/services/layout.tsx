import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | CultureRoots",
  description: "From Translation & Localization to Influencer Collaboration. Discover our comprehensive suite of multicultural media and branding services.",
  keywords: "multicultural media services, CultureRoots offerings, translation, branding, PR, digital advertising",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
