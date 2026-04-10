import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing in the United States | CultureRoots",
  description: "Unlock the lucrative US market. CultureRoots guides international brands through complex demographics with tailored, insight-driven campaigns.",
  keywords: "US multicultural marketing, American advertising, US market entry, CultureRoots United States",
};

export default function USLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
