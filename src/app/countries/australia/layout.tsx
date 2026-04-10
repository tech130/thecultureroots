import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing in Australia | CultureRoots",
  description: "Tap into the dynamic Australian market. CultureRoots crafts powerful advertising and influencer drives localized for Aussie consumers.",
  keywords: "Australia marketing, Aussie influencers, localized media Australia, CultureRoots advertising",
};

export default function AustraliaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
