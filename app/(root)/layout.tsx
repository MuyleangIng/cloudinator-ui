import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

import { ThemeProvider } from "@/components/theme-provider"
import NavBarHomePage from "@/components/navbar/NavBarHomePage";
import BackToTopButton from "@/components/BackToTopButton";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import {SiteFooter} from "@/components/footer/SiteFooter";
import TutorialPopup from "@/components/TutorialPopup";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cloudinator",
  description: "Cloudinator Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          <NavBarHomePage/>
          <ScrollProgressBar />
          {children}
          <BackToTopButton />
          <SiteFooter />
          <TutorialPopup />
      </ThemeProvider>
      </body>
    </html>
);
}
