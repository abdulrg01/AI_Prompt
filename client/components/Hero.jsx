import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".items",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.2,
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".header-text",
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
        delay: 1,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className="pt-40 pb-10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="inline-block animate-pulse px-4 py-1 mb-4 rounded-full border border-gray-800 bg-gray-900/50 items">
            ⚡ URL Uncovered
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight header-text">
            Get the Details, Instantly
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto items">
            Discover the power of effortless website analysis with LinkAnalyzer.
            Simply paste any website link, and our tool will instantly provide
            you with detailed insights and valuable information about the site.
          </p>
          <div className="flex justify-center gap-4 pt-8 relative z-10 header-text">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium text-sm px-5 py-2.5 rounded-xl text-center me-2 mb-2 "
            >
              Download for mac
            </button>
            <button
              type="button"
              class="py-2.5 rounded-xl px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Other
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
