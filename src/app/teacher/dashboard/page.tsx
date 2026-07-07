"use client";
import React from "react";
import { Users, FileText, CheckCircle, Clock } from "lucide-react";

export default function TeacherDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Teacher Workspace</h1>
          <p className="text-gray-400">Welcome back, Mr. Hatake. You have 3 classes today.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-white hover:bg-white/10 transition-colors">
            Generate Lesson Plan (AI)
          </button>
          <button className="bg-[#4f8dff] text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#3d70cc] transition-colors">
            + New Assignment
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#121826] border border-white/10 p-5 rounded-xl">
          <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Total Students</div>
          <div className="text-3xl font-bold text-white flex items-center gap-3">
            124 <Users size={20} className="text-[#4f8dff]" />
          </div>
        </div>
        <div className="bg-[#121826] border border-white/10 p-5 rounded-xl">
          <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">To Grade</div>
          <div className="text-3xl font-bold text-white flex items-center gap-3">
            38 <FileText size={20} className="text-[#facc15]" />
          </div>
        </div>
        <div className="bg-[#121826] border border-white/10 p-5 rounded-xl">
          <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Average Score</div>
          <div className="text-3xl font-bold text-white flex items-center gap-3">
            86% <CheckCircle size={20} className="text-[#4ade80]" />
          </div>
        </div>
        <div className="bg-[#121826] border border-white/10 p-5 rounded-xl">
          <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Next Class</div>
          <div className="text-2xl font-bold text-white flex items-center gap-3">
            10:15 AM <Clock size={20} className="text-[#a855f7]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Classes list */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-4">Today's Classes</h2>
          <div className="bg-[#121826] border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-white/5 text-xs text-gray-400 uppercase">
                <tr>
                  <th className="px-6 py-4 font-semibold">Time</th>
                  <th className="px-6 py-4 font-semibold">Subject</th>
                  <th className="px-6 py-4 font-semibold">Room</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">08:30 AM</td>
                  <td className="px-6 py-4 font-semibold text-white">Ninjutsu (Math) 101</td>
                  <td className="px-6 py-4 text-gray-400">Room 3A</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md text-xs">Completed</span></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">10:15 AM</td>
                  <td className="px-6 py-4 font-semibold text-white">Genjutsu (Physics)</td>
                  <td className="px-6 py-4 text-gray-400">Lab 2</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs">Up Next</span></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">01:00 PM</td>
                  <td className="px-6 py-4 font-semibold text-white">Taijutsu (P.E.)</td>
                  <td className="px-6 py-4 text-gray-400">Gymnasium</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-md text-xs">Scheduled</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Insights */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">AI Insights</h2>
          <div className="bg-[#121826] border border-white/10 rounded-xl p-6 space-y-4">
            <div className="flex gap-4 border-b border-white/5 pb-4">
              <div className="w-8 h-8 rounded-full bg-[#4f8dff]/20 flex items-center justify-center shrink-0">
                <span className="text-xl text-[#4f8dff]">🤖</span>
              </div>
              <div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">Attention:</span> 5 students in your Math 101 class are struggling with quadratic equations based on yesterday's quiz.
                </p>
                <button className="text-[#4f8dff] text-xs font-semibold mt-2 hover:underline">Generate review material</button>
              </div>
            </div>
            
            <div className="flex gap-4 border-b border-white/5 pb-4">
              <div className="w-8 h-8 rounded-full bg-[#4f8dff]/20 flex items-center justify-center shrink-0">
                <span className="text-xl text-[#4f8dff]">🤖</span>
              </div>
              <div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">Suggestion:</span> The upcoming physics lesson could benefit from a practical demonstration of momentum.
                </p>
                <button className="text-[#4f8dff] text-xs font-semibold mt-2 hover:underline">View lesson plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
