import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Development | CultureRoots",
  description: "Compelling narratives that transcend borders. Let CultureRoots shape your brand's story through premium multicultural creative development.",
  keywords: "multicultural creative agency, brand storytelling, video production, Cultureroots design",
};

export default function CreativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
