import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://hagernady.dev"),
  title: "Hager Nady — Full Stack Developer",
  description:
    "Hager Nady — Full Stack Developer specializing in React, Next.js, Node.js and Technical SEO.",
  openGraph: {
    title: "Hager Nady — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js and Technical SEO.",
    type: "website",
    url: "https://hagernady.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hager Nady — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js and Technical SEO.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-grid font-body">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}