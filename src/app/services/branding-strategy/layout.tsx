import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding & Strategy | CultureRoots",
  description: "Craft a cultural identity. From inception to execution, CultureRoots delivers comprehensive branding and strategic consulting for growing enterprises.",
  keywords: "multicultural branding strategy, brand consultation, cultural identity, CultureRoots strategy",
};

export default function BrandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
