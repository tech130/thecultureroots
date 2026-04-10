import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | CultureRoots",
  description: "Get in touch with CultureRoots. Let's discuss how we can help your brand grow across borders authentically with our multicultural marketing services.",
  keywords: "contact CultureRoots, multicultural agency, media services, schedule a call",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
