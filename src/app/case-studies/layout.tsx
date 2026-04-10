import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Work | CultureRoots",
  description: "Explore our successful multicultural campaigns. See how CultureRoots bridges gaps and drives growth for brands globally.",
  keywords: "CultureRoots case studies, multicultural campaigns, global branding examples, marketing success stories",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
