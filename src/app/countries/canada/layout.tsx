import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing in Canada | CultureRoots",
  description: "Reach diverse Canadian audiences. CultureRoots delivers nuanced marketing strategies respecting transcultural shifts across the Canadian market.",
  keywords: "Canada marketing agency, Canadian advertising, multicultural PR Canada, CultureRoots Canada",
};

export default function CanadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
