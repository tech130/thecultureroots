import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multicultural PR | CultureRoots",
  description: "Foster genuine connections. CultureRoots conducts specialized PR strategies to elevate your brand's presence across diverse global communities.",
  keywords: "multicultural PR, public relations agency, culturally relevant PR, CultureRoots PR",
};

export default function PRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
