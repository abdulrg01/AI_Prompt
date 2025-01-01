import React, { useState, useEffect } from "react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-20 right-20 z-50 rounded-xl border border-gray-800 bg-black/50 backdrop-blur-sm transition-all duration-300 ease-in-out ${
        isScrolled ? "top-0" : "top-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg font-semibold">◄ Cursor</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Pricing
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Features
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              GitHub
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Forum
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Careers
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Blog
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Sign in
            </Link>
            <button
              type="button"
              class="py-2.5 rounded-xl px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
