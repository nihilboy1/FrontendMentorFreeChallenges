import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fylo data storage",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0F1B3D]`}>{children}</body>
    </html>
  );
}
