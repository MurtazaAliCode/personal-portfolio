import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Sparkles from "@/components/Sparkles";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Creative Portfolio | Modern Developer",
  description: "A premium developer portfolio showcasing high-quality projects and creative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground antialiased selection:bg-cta selection:text-white">
        <Background />
        <Sparkles />
        {children}
      </body>
    </html>
  );
}
