import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/container/header";
import Footer from "@/components/container/footer";
import { Karla } from "next/font/google";

const clashGrotesk = localFont({
  src: "../public/fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clashGrotesk",
});
const barned = localFont({
  src: "../public/fonts/barned.otf",
  variable: "--font-barned",
});
const karl = Karla({
  subsets: ["latin"],
  variable: "--font-karl",
});

export const metadata: Metadata = {
  title: "Edidiong Kalu",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashGrotesk.variable} ${barned.variable} ${karl.variable} font-barned text-text-color antialiased bg-background overflow-x-hidden w-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
