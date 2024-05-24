import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.className} p-6 min-h-[100vh] bg-teal-100 bg-opacity-70 flex justify-center items-center`}
      >
        {children}
      </body>
      <Toaster position="top-center" expand={true} />
    </html>
  );
}
