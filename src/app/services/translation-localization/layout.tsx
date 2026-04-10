import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Translation & Localization | CultureRoots",
  description: "Ensure your brand resonates authentically across borders. CultureRoots provides expert multicultural translation and precise localization services.",
  keywords: "translation services, multicultural localization, cultural adaptation, CultureRoots translation",
};

export default function TranslationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
