import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Influencer Collaboration | CultureRoots",
  description: "Leverage the power of authentic voices. Partner with key cultural influencers globally through CultureRoots' extensive network.",
  keywords: "influencer marketing, global creators, brand ambassadors, multicultural influencers, CultureRoots collaborations",
};

export default function InfluencerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
