"use client";

import { ArrowUpIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-accent text-neutral-300 pt-16 pb-8 rounded-2xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-16 lg:gap-x-24 border-b border-[#333333] pb-16 mb-8">
          <div className="flex flex-col gap-4 pr-0 md:pr-8 md:border-r border-[#333333]">
            <h3 className="text-sm text-gray-500 font-mono">
              Hey Mail Us @
            </h3>
            <Link
              href="mailto:healthkit@gmail.com"
              className="text-3xl font-bold text-white hover:text-gray-400 transition-colors break-words"
            >
              healthkit<span className="text-chart-2">@</span>gmail.com
            </Link>
          </div>
          <div className="flex flex-col gap-4 pr-0 md:pr-8 md:border-r border-[#333333]">
            <h3 className="text-sm text-gray-500 font-mono">Quick Navigation</h3>
            <Link
              href="#home"
              className="text-lg font-medium text-white hover:text-gray-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-lg font-medium text-white hover:text-gray-400 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-lg font-medium text-white hover:text-gray-400 transition-colors"
            >
              Medicines
            </Link>
            
          </div>
          <div className="flex flex-col gap-4 pt-8 md:pt-0 px-0 md:px-8 pr-0">
            <h3 className="text-sm text-gray-500 font-mono">Info</h3>
            <Link
              href="#"
              className="text-lg font-medium text-white hover:text-gray-400 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-lg font-medium text-white hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-lg font-medium text-white hover:text-gray-400 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p className="mb-4 md:mb-0 whitespace-nowrap">
            &copy; {new Date().getFullYear()} Healthkit
          </p>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span>Your Wellness,</span>
            <span className="text-white">Simplified.</span>
            <button
              onClick={scrollToTop}
              className="ml-6 w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-[#3A3A3A] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUpIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
     