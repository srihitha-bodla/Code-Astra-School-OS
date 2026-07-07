"use client";
import React from "react";
import { TrendingUp, Users, Activity, Target } from "lucide-react";

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">School Analytics</h1>
        <p className="text-gray-400">Comprehensive overview of district performance and engagement.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#121826] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#3ddcff]/10 rounded-full blur-2xl group-hover:bg-[#3ddcff]/20 transition-colors" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <Users size={20} className="text-[#3ddcff]" />
              <h3 className="text-gray-400 font-semibold text-sm">Total Enrollment</h3>
            </div>
            <div className="text-4xl font-bold text-white mb-2">1,284</div>
            <div className="text-xs text-green-400 flex items-center gap-1"><TrendingUp size={12}/> +2.4% from last month</div>
          </div>
        </div>

        <div className="bg-[#121826] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ade80]/10 rounded-full blur-2xl group-hover:bg-[#4ade80]/20 transition-colors" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <Activity size={20} className="text-[#4ade80]" />
              <h3 className="text-gray-400 font-semibold text-sm">Avg Attendance</h3>
            </div>
            <div className="text-4xl font-bold text-white mb-2">96.2%</div>
            <div className="text-xs text-green-400 flex items-center gap-1"><TrendingUp size={12}/> +0.8% from last month</div>
          </div>
        </div>

        <div className="bg-[#121826] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b7cff]/10 rounded-full blur-2xl group-hover:bg-[#8b7cff]/20 transition-colors" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <Target size={20} className="text-[#8b7cff]" />
              <h3 className="text-gray-400 font-semibold text-sm">Avg Test Score</h3>
            </div>
            <div className="text-4xl font-bold text-white mb-2">82.4%</div>
            <div className="text-xs text-red-400 flex items-center gap-1"><TrendingUp size={12} className="rotate-180"/> -1.2% from last month</div>
          </div>
        </div>

        <div className="bg-[#121826] border border-white/10 p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#facc15]/10 rounded-full blur-2xl group-hover:bg-[#facc15]/20 transition-colors" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp size={20} className="text-[#facc15]" />
              <h3 className="text-gray-400 font-semibold text-sm">AI Usage Hours</h3>
            </div>
            <div className="text-4xl font-bold text-white mb-2">4,520</div>
            <div className="text-xs text-green-400 flex items-center gap-1"><TrendingUp size={12}/> +15% from last month</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Attendance Trend Line Chart Mock */}
        <div className="bg-[#121826] border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Attendance Trend (Past 6 Months)</h2>
          <div className="relative h-64 flex items-end gap-2 px-2">
            <div className="absolute inset-0 flex flex-col justify-between py-2 opacity-20 pointer-events-none">
              <div className="border-b border-white/20 w-full" />
              <div className="border-b border-white/20 w-full" />
              <div className="border-b border-white/20 w-full" />
              <div className="border-b border-white/20 w-full" />
            </div>
            {[85, 88, 92, 90, 95, 96].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center group z-10">
                <div 
                  className="w-full bg-gradient-to-t from-[#8b7cff]/20 to-[#8b7cff] rounded-t-md relative transition-all group-hover:brightness-125"
                  style={{ height: `${val}%` }}
                >
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100">{val}%</span>
                </div>
                <span className="text-xs text-gray-400 mt-2">M{i+1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grade Distribution Bar Chart Mock */}
        <div className="bg-[#121826] border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Grade Distribution (Current Semester)</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white font-semibold">A (90-100%)</span>
                <span className="text-gray-400">35% of Students</span>
              </div>
              <div className="w-full bg-black/40 rounded-full h-3">
                <div className="bg-[#4ade80] h-3 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white font-semibold">B (80-89%)</span>
                <span className="text-gray-400">42% of Students</span>
              </div>
              <div className="w-full bg-black/40 rounded-full h-3">
                <div className="bg-[#3ddcff] h-3 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white font-semibold">C (70-79%)</span>
                <span className="text-gray-400">18% of Students</span>
              </div>
              <div className="w-full bg-black/40 rounded-full h-3">
                <div className="bg-[#facc15] h-3 rounded-full" style={{ width: '18%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white font-semibold">D/F (Below 70%)</span>
                <span className="text-gray-400">5% of Students</span>
              </div>
              <div className="w-full bg-black/40 rounded-full h-3">
                <div className="bg-red-400 h-3 rounded-full" style={{ width: '5%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
