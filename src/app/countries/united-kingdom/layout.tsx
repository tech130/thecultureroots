import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing in the United Kingdom | CultureRoots",
  description: "Navigate the UK's diverse audience landscape. CultureRoots deploys highly localized strategies to engage British consumers effectively.",
  keywords: "UK marketing, British advertising, localized PR UK, CultureRoots United Kingdom",
};

export default function UKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
