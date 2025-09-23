import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavbarSwitcher from "./components/Navbar/NavbarSwitcher"; 



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perseply – সহজে আরবি শিখুন",
  description: "অডিও, উদাহরণ ও পাঠসহ নবাগতদের জন্য সাজানো একটি আরবি কোর্স।",
   icons: {
    icon: "/favicon.ico", // or "/favicon.png"
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarSwitcher />
        {children}



      </body>
    </html>
  );
}
