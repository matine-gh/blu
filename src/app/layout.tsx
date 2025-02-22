import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/reduxProvider";
import {iransans} from '@/app/utils/fonts';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blu Interview App",
  description: "by Matine Ghazanfari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir={'rtl'} className={iransans.className}>
      <body className={inter.className}>
      <ReduxProvider>
        {children}
      </ReduxProvider>
      </body>
    </html>
  );
}
