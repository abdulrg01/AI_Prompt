import Demo from "@components/Demo";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Nav from "@components/Nav";
import Pricing from "@components/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />

      <div className="max-w-5xl mx-auto px-4 p-5 pb-20 relative z-0 py-10">
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
                  <div>► Summary</div>
                  <div>► Images</div>
                  <div>► Pages</div>
                </div>
              </div>
            </div>
            <Demo />
          </div>
        </div>
      </div>

      <Pricing />
      <Footer />
    </div>
  );
}
