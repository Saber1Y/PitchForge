import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/providers/AuthProvider";
import 'easymde/dist/easymde.min.css';

const sora = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
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
      <body className={`${sora.variable} font-sora antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
