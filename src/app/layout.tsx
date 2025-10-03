import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Amaranth } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/providers/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amaranth = Amaranth({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-amaranth",
});

export const metadata: Metadata = {
  title: "PitchForge - Where Ideas Become Startups",
  description:
    "A modern platform for entrepreneurs to showcase startup ideas, connect with founders, and gain exposure in the startup ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${amaranth.variable} ${geistSans.variable} ${geistMono.variable} font-amaranth antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
