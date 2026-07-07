"use client";
import React from "react";
import { BookOpen, Megaphone, FileText, Download, CheckCircle, Clock } from "lucide-react";

export default function StudentMaterialsPage() {
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

      <div className="border-b-4 border-black pb-4">
        <h1 className="text-4xl font-black text-white uppercase italic tracking-wider">My Materials & Homework</h1>
        <p className="text-gray-400 mt-2 font-semibold">View materials posted by your teachers and submit assignments.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Active Homework */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Clock className="text-[#F97316]" /> Due Soon
          </h2>

          <div className="bg-[#1E3A5F] border-4 border-black rounded-xl p-6 relative group transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_#000]">
            <div className="absolute top-0 right-0 bg-[#F97316] text-black text-xs font-black px-3 py-1 border-b-4 border-l-4 border-black rounded-bl-xl">
              DUE TOMORROW
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Read Chapter 4</h3>
            <p className="text-sm text-gray-300 mb-4">Assigned by: Mr. Hatake • History of Shinobi</p>
            <p className="text-sm text-white bg-black/30 p-3 border-2 border-black rounded-lg mb-4">
              Please read chapter 4 regarding the 3rd Great War and prepare a short summary for tomorrow's discussion.
            </p>
            <button className="w-full bg-[#F97316] text-black font-black uppercase tracking-wider py-3 border-4 border-black rounded-xl hover:bg-[#ff8a3d] transition-colors shadow-[4px_4px_0_#000] active:translate-y-1 active:shadow-none">
              Submit Summary
            </button>
          </div>

          <div className="bg-[#1E3A5F] border-4 border-black rounded-xl p-6 relative group transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_#000]">
            <div className="absolute top-0 right-0 bg-[#FFD700] text-black text-xs font-black px-3 py-1 border-b-4 border-l-4 border-black rounded-bl-xl">
              DUE FRIDAY
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Math Worksheet</h3>
            <p className="text-sm text-gray-300 mb-4">Assigned by: Mr. Hatake • Advanced Ninjutsu (Math)</p>
            <div className="flex items-center justify-between p-3 bg-black/30 border-2 border-black rounded-lg mb-4">
              <div className="flex items-center gap-2 text-sm text-white">
                <FileText size={16} className="text-[#F97316]" /> equations_v2.pdf
              </div>
              <button className="text-[#F97316] hover:text-white transition-colors">
                <Download size={18} />
              </button>
            </div>
            <button className="w-full bg-transparent text-white font-black uppercase tracking-wider py-3 border-4 border-black rounded-xl hover:bg-white/10 transition-colors shadow-[4px_4px_0_#000] active:translate-y-1 active:shadow-none">
              Upload Answers
            </button>
          </div>
        </div>

        {/* Reference Materials */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <BookOpen className="text-[#3ddcff]" /> Course Materials
          </h2>

          <div className="bg-[#1E3A5F] border-4 border-black rounded-xl p-6 shadow-[4px_4px_0_#000]">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-black/40 border-2 border-black rounded-lg hover:bg-black/60 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3 text-sm text-white font-semibold">
                  <div className="w-8 h-8 bg-blue-500/20 text-blue-400 rounded-md flex items-center justify-center border border-blue-500/50">
                    <FileText size={16} />
                  </div>
                  Syllabus - History of Shinobi
                </div>
                <Download size={16} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>

              <div className="flex items-center justify-between p-3 bg-black/40 border-2 border-black rounded-lg hover:bg-black/60 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3 text-sm text-white font-semibold">
                  <div className="w-8 h-8 bg-green-500/20 text-green-400 rounded-md flex items-center justify-center border border-green-500/50">
                    <FileText size={16} />
                  </div>
                  Chakra Control Diagram
                </div>
                <Download size={16} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>

              <div className="flex items-center justify-between p-3 bg-black/40 border-2 border-black rounded-lg hover:bg-black/60 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3 text-sm text-white font-semibold">
                  <div className="w-8 h-8 bg-red-500/20 text-red-400 rounded-md flex items-center justify-center border border-red-500/50">
                    <FileText size={16} />
                  </div>
                  Taijutsu Stances (Video Link)
                </div>
                <BookOpen size={16} className="text-gray-500 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] border-4 border-black rounded-xl p-6 text-center shadow-[4px_4px_0_#000]">
            <h3 className="text-xl font-bold text-white mb-2">Need Help with Homework?</h3>
            <p className="text-sm text-gray-400 mb-4">Kakashi AI is available 24/7 to help you understand your materials.</p>
            <button className="bg-white text-black font-black uppercase tracking-wider px-6 py-2 border-4 border-black rounded-xl hover:bg-gray-200 transition-colors shadow-[4px_4px_0_#000] active:translate-y-1 active:shadow-none inline-flex items-center gap-2">
              <span className="text-xl">🦊</span> Ask Kakashi
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
