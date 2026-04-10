import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Advertising | CultureRoots",
  description: "Run high-impact digital advertising campaigns tailored for diverse markets. We maximize ROI and cultural relevance natively.",
  keywords: "multicultural digital ads, targeted advertising, CultureRoots media buying, inclusive marketing",
};

export default function DigitalAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
