import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRoot } from "recoil";
import RecoilContextProvider from "@/providers/RecoilContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InfinitySprint",
  description: "Limitless innovation, endless solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en" className="relative">
        <body className={inter.className}>
        <RecoilContextProvider>{children}
        </RecoilContextProvider>
        </body>
      </html>
    
  );
}
