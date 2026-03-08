import type { Metadata } from "next";
import { Outfit, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammed Shadil MP | UI/UX Designer & Frontend Developer",
  description:
    "Portfolio of Muhammed Shadil MP — A UI/UX Designer and Frontend Developer who builds visually engaging digital products with strong motion design, thoughtful user experiences, and clean frontend architecture.",
  keywords: [
    "UI/UX Designer",
    "Frontend Developer",
    "Portfolio",
    "Muhammed Shadil",
    "React",
    "Next.js",
    "Motion Design",
  ],
  authors: [{ name: "Muhammed Shadil MP" }],
  openGraph: {
    title: "Muhammed Shadil MP | UI/UX Designer & Frontend Developer",
    description:
      "A UI/UX Designer and Frontend Developer crafting visually engaging digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
