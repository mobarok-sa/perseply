"use client";

import Link from "next/link";

interface FooterProps {
  variant?: "home" | "course"; // default "home"
}

export default function Footer({ variant = "home" }: FooterProps) {
  return (
    <footer className="bg-green-600 text-white py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Home variant: CTA */}
        {variant === "home" && (
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">শেখা শুরু করতে প্রস্তুত?</h2>
            <p className="mb-4">আজই আমাদের নবাগত আরবি কোর্সে ভর্তি হন।</p>
            <Link
              href="#"
              className="px-6 py-3 bg-white text-green-600 font-semibold rounded-2xl shadow hover:bg-gray-100 transition"
            >
              এখনই ভর্তি হন
            </Link>
          </div>
        )}

        {/* Course variant: minimal */}
        {variant === "course" && (
          <div className="text-center md:text-left">
            <span className="text-white/80">© {new Date().getFullYear()} Perseply. All rights reserved.</span>
          </div>
        )}

        {/* Common links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-white/80">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
