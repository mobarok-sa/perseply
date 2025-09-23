// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";

export default function Navbar() { 
    return (
       
      <header className="flex items-center justify-between px-6 py-4 shadow bg-white sticky top-0 z-50">
        {/* Logo Placeholder */}
        {/* Logo with link */}
        <Link href="/" className="flex items-center">
          <Image
            src="/perseply_icon.png" // replace with your logo path
            alt="My Arabic Logo"
            width={40}  // adjust size
            height={40} // adjust size
            priority     // ensures logo loads fast
          />
         <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent group-hover:from-green-700 group-hover:to-emerald-500 transition">
            Perseply
          </span>
        </Link>




        {/* Menu */}
        <nav className="space-x-6 flex items-center">
          <Link href="/course" className="text-gray-700 hover:text-green-600">
            শুরু করুন
          </Link>
         
         {/* Language Switcher */}
       <Link
          href="/en"
          className="p-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition flex items-center justify-center"
          aria-label="Switch to English"
        >
          <Globe className="w-5 h-5" />
        </Link>

        </nav>
      </header>
    );
}

