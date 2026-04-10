import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing in New Zealand | CultureRoots",
  description: "Grow your brand locally across Aotearoa. Explore our comprehensive marketing, influencer, and localized strategies for New Zealand.",
  keywords: "New Zealand marketing agency, NZ digital advertising, CultureRoots Aotearoa, Kiwi audience targeting",
};

export default function NZLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
