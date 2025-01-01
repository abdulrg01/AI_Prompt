import Link from "next/link";
import { useEffect, useState } from "react";
import Scroller from "./Scroller";
import { useLazyGetSummaryQuery } from "@services/article";
import Demo from "./Demo";
import Nav from "./Nav";

export default function Home() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

  // RTK lazy query
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // Load data from localStorage on mount
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingArticle = allArticles.find(
      (item) => item.url === article.url
    );

    if (existingArticle) return setArticle(existingArticle);

    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      // update state and local storage
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  // copy the url and toggle the icon for user feedback
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />

      {/* Hero Section */}
      <div className="pt-32 pb-10">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="inline-block animate-pulse px-4 py-1 mb-4 rounded-full border border-gray-800 bg-gray-900/50">
              ⚡ URL Uncovered
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Get the Details, Instantly
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover the power of effortless website analysis with
              LinkAnalyzer. Simply paste any website link, and our tool will
              instantly provide you with detailed insights and valuable
              information about the site.
            </p>
            <div className="flex justify-center gap-4 pt-8 relative z-10">
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

      {/* Editor Preview */}
      <div className="max-w-5xl mx-auto px-4 p-5 pb-20 relative z-0">
        <div className="relative rounded-lg overflow-hidden border border-gray-800 bg-[#1E1E1E]">
          <div className="flex items-center px-4 py-2 bg-[#2D2D2D] border-b border-gray-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-[240px,1fr] divide-x divide-gray-800">
            <div className="hidden md:block p-4 text-gray-400 text-sm">
              <div className="space-y-2">
                <div className="text-gray-500">Welcome to LinkAnalyzer</div>
                <div className="pl-4 space-y-1">
                  <div>► src</div>
                  <div>► components</div>
                  <div>► pages</div>
                  <div>► Images</div>
                </div>
              </div>
            </div>
            <Demo />
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <Scroller />

      {/* Bottom Section
      <div className="relative mt-20 z-10">
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        <div className="relative container mx-auto px-4 py-32 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Build Software Faster
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cursor's features unlock massive speedups for engineers
          </p>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[200%] aspect-[4/1]">
            <div className="w-full h-full bg-[#0A0A0A] rounded-[100%]"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
