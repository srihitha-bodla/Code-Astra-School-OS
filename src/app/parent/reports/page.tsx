"use client";
import React from "react";
import { LineChart, TrendingUp, BookOpen, Target, Calendar } from "lucide-react";

export default function ParentReportsPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Student Reports</h1>
          <p className="text-gray-400">Detailed performance tracking for Naruto Uzumaki.</p>
        </div>
        <select className="bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-sm text-white outline-none focus:border-[#d9b46b]">
          <option>Fall Semester</option>
          <option>Spring Semester</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#121826] border border-white/10 p-6 rounded-xl">
          <div className="text-gray-400 text-sm font-semibold uppercase mb-2">Overall GPA</div>
          <div className="text-4xl font-bold text-white flex items-center justify-between">
            3.2 
            <TrendingUp size={24} className="text-green-400" />
          </div>
          <div className="text-xs text-green-400 mt-2">+0.4 from last semester</div>
        </div>
        
        <div className="bg-[#121826] border border-white/10 p-6 rounded-xl">
          <div className="text-gray-400 text-sm font-semibold uppercase mb-2">Attendance</div>
          <div className="text-4xl font-bold text-white flex items-center justify-between">
            92% 
            <Calendar size={24} className="text-[#d9b46b]" />
          </div>
          <div className="text-xs text-red-400 mt-2">-2% from last month</div>
        </div>
        
        <div className="bg-[#121826] border border-white/10 p-6 rounded-xl">
          <div className="text-gray-400 text-sm font-semibold uppercase mb-2">Missing Assignments</div>
          <div className="text-4xl font-bold text-white flex items-center justify-between">
            2
            <Target size={24} className="text-red-400" />
          </div>
          <div className="text-xs text-gray-400 mt-2">Due in History & Math</div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Performance by Subject */}
        <div className="bg-[#121826] border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Subject Performance</h2>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white font-semibold flex items-center gap-2"><BookOpen size={16} className="text-[#d9b46b]"/> Advanced Ninjutsu</span>
                <span className="text-white font-bold">85% (B)</span>
              </div>
              <div className="w-full bg-black/40 rounded-full h-2">
                <div className="bg-[#d9b46b] h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white font-semibold flex items-center gap-2"><BookOpen size={16} className="text-green-400"/> Basic Taijutsu</span>
                <span className="text-white font-bold">95% (A)</span>
              </div>
              <div className="w-full bg-black/40 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white font-semibold flex items-center gap-2"><BookOpen size={16} className="text-red-400"/> History of Shinobi</span>
                <span className="text-white font-bold">65% (D)</span>
              </div>
              <div className="w-full bg-black/40 rounded-full h-2">
                <div className="bg-red-400 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Teacher Feedback */}
        <div className="bg-[#121826] border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Recent Teacher Feedback</h2>
          <div className="space-y-4">
            <div className="p-4 bg-black/20 border border-white/5 rounded-lg">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-[#d9b46b]">Mr. Hatake (Ninjutsu)</span>
                <span className="text-gray-500">2 days ago</span>
              </div>
              <p className="text-sm text-gray-300 italic">"Naruto has shown great improvement in his chakra control, but he needs to focus more during the theoretical lectures."</p>
            </div>
            <div className="p-4 bg-black/20 border border-white/5 rounded-lg">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-[#d9b46b]">Mr. Sarutobi (History)</span>
                <span className="text-gray-500">1 week ago</span>
              </div>
              <p className="text-sm text-gray-300 italic">"He is missing the latest essay assignment. Please ensure he submits it by Friday."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
