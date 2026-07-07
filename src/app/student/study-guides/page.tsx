"use client";
import React from "react";
import { Scroll, Search, Sparkles, Megaphone } from "lucide-react";

export default function StudentStudyGuidesPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Holiday Announcement Banner */}
      <div className="bg-[#F97316]/20 border-2 border-[#F97316] rounded-xl p-5 relative overflow-hidden shadow-[4px_4px_0_#F97316]">
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center shrink-0 border-2 border-black">
            <Megaphone className="text-black" size={24} />
          </div>
          <div>
            <h3 className="font-black text-white text-xl uppercase tracking-wider">School Closure: Village Foundation Day</h3>
            <p className="text-sm text-gray-200 mt-1">
              <strong>Admin Broadcast:</strong> The Academy will be closed next Monday. Please use this time to catch up on assignments.
            </p>
          </div>
        </div>
      </div>

      <div className="border-b-4 border-black pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-white uppercase italic tracking-wider">Study Guides</h1>
          <p className="text-gray-400 mt-2 font-semibold">AI-generated summaries and review sheets.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search topics..." 
            className="w-full md:w-64 bg-black/40 border-2 border-black rounded-xl pl-10 pr-4 py-2.5 text-sm text-white outline-none focus:border-[#3ddcff] shadow-[4px_4px_0_#000]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Guide 1 */}
        <div className="bg-[#1E3A5F] border-4 border-black rounded-xl p-6 relative group transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_#000] cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-blue-400/20 text-blue-400 flex items-center justify-center border-2 border-black mb-4 group-hover:scale-110 transition-transform">
            <Scroll size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">History of Shinobi: Ch 1-4</h3>
          <p className="text-sm text-gray-300 mb-4">Complete summary of the origins of chakra, the sage of six paths, and the first three great wars.</p>
          <div className="flex items-center gap-2 text-xs font-bold text-[#3ddcff]">
            <Sparkles size={14} /> AI Generated • 5 min read
          </div>
        </div>

        {/* Guide 2 */}
        <div className="bg-[#1E3A5F] border-4 border-black rounded-xl p-6 relative group transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_#000] cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-green-400/20 text-green-400 flex items-center justify-center border-2 border-black mb-4 group-hover:scale-110 transition-transform">
            <Scroll size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Basic Taijutsu Stances</h3>
          <p className="text-sm text-gray-300 mb-4">A visual and text breakdown of the 8 fundamental stances for close combat.</p>
          <div className="flex items-center gap-2 text-xs font-bold text-[#3ddcff]">
            <Sparkles size={14} /> AI Generated • 8 min read
          </div>
        </div>

        {/* Guide 3 */}
        <div className="bg-[#1E3A5F] border-4 border-black rounded-xl p-6 relative group transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_#000] cursor-pointer opacity-70">
          <div className="w-12 h-12 rounded-xl bg-purple-400/20 text-purple-400 flex items-center justify-center border-2 border-black mb-4 group-hover:scale-110 transition-transform">
            <Scroll size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Chakra Natures</h3>
          <p className="text-sm text-gray-300 mb-4">Fire, Water, Earth, Wind, Lightning. How they interact and counter each other.</p>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
            Last accessed 2 weeks ago
          </div>
        </div>

      </div>
    </div>
  );
}
