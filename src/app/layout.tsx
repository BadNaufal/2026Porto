import type { Metadata } from "next";
import { archivo, inter } from "@/fonts";
import { siteConfig } from "@/lib/site-config";
import { RevealController } from "@/components/system/RevealController";
import { SmoothScroll } from "@/components/system/SmoothScroll";
import { CursorGlow } from "@/components/system/CursorGlow";
import { ScrollProgress } from "@/components/system/ScrollProgress";
import { CustomCursor } from "@/components/system/CustomCursor";
import { NavSectionTracker } from "@/components/system/NavSectionTracker";
import { PageTransition } from "@/components/system/PageTransition";
import { Preloader } from "@/components/system/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ink text-fg">
        <RevealController />
        <SmoothScroll />
        <CursorGlow />
        <ScrollProgress />
        <CustomCursor />
        <NavSectionTracker />
        <PageTransition />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
