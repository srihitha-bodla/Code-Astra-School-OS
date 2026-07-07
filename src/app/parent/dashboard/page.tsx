"use client";
import React from "react";
import { TrendingUp, UserCheck, AlertTriangle, Calendar } from "lucide-react";

export default function ParentDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Parent Workspace</h1>
          <p className="text-gray-400">Welcome, Mrs. Uzumaki. Here is Naruto's recent activity.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-white hover:bg-white/10 transition-colors">
            Contact Teachers
          </button>
          <button className="bg-[#d9b46b] text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#c2a05e] transition-colors">
            Pay Fees
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#121826] border border-white/10 p-5 rounded-xl">
          <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Current Grade</div>
          <div className="text-3xl font-bold text-white flex items-center gap-3">
            B+ <TrendingUp size={20} className="text-[#d9b46b]" />
          </div>
        </div>
        <div className="bg-[#121826] border border-white/10 p-5 rounded-xl">
          <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Attendance</div>
          <div className="text-3xl font-bold text-white flex items-center gap-3">
            92% <UserCheck size={20} className="text-[#4ade80]" />
          </div>
        </div>
        <div className="bg-[#121826] border border-white/10 p-5 rounded-xl">
          <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Missing Work</div>
          <div className="text-3xl font-bold text-white flex items-center gap-3">
            2 <AlertTriangle size={20} className="text-[#facc15]" />
          </div>
        </div>
        <div className="bg-[#121826] border border-white/10 p-5 rounded-xl">
          <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Next Event</div>
          <div className="text-2xl font-bold text-white flex items-center gap-3">
            PTA <Calendar size={20} className="text-[#a855f7]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="bg-[#121826] border border-white/10 rounded-xl overflow-hidden">
            <ul className="divide-y divide-white/5">
              <li className="p-4 hover:bg-white/5 transition-colors flex justify-between items-center">
                <div>
                  <p className="text-white font-semibold">Math Quiz Graded</p>
                  <p className="text-sm text-gray-400 mt-1">Naruto scored 85% on Algebra II</p>
                </div>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </li>
              <li className="p-4 hover:bg-white/5 transition-colors flex justify-between items-center">
                <div>
                  <p className="text-white font-semibold">Absence Logged</p>
                  <p className="text-sm text-gray-400 mt-1">Naruto missed Taijutsu (P.E.)</p>
                </div>
                <span className="text-xs text-[#facc15] bg-[#facc15]/10 px-2 py-1 rounded">Needs Review</span>
              </li>
              <li className="p-4 hover:bg-white/5 transition-colors flex justify-between items-center">
                <div>
                  <p className="text-white font-semibold">New Assignment Posted</p>
                  <p className="text-sm text-gray-400 mt-1">Physics Lab Report due Friday</p>
                </div>
                <span className="text-xs text-gray-500">Yesterday</span>
              </li>
            </ul>
          </div>
        </div>

        {/* AI Parent Summary */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">AI Summary</h2>
          <div className="bg-[#121826] border border-white/10 rounded-xl p-6 space-y-4">
            <div className="flex gap-4 border-b border-white/5 pb-4">
              <div className="w-8 h-8 rounded-full bg-[#d9b46b]/20 flex items-center justify-center shrink-0">
                <span className="text-xl text-[#d9b46b]">🤖</span>
              </div>
              <div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">Progress:</span> Naruto is showing great improvement in Math over the last two weeks, increasing his average by 12%.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 border-b border-white/5 pb-4">
              <div className="w-8 h-8 rounded-full bg-[#d9b46b]/20 flex items-center justify-center shrink-0">
                <span className="text-xl text-[#d9b46b]">🤖</span>
              </div>
              <div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">Focus Area:</span> We recommend reviewing the Physics study guides together this weekend before the mid-terms.
                </p>
                <button className="text-[#d9b46b] text-xs font-semibold mt-2 hover:underline">View study guides</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
