"use client";
import React from "react";
import Link from "next/link";
import { Book, Target, Scroll, Calendar, Activity, Trophy, Flame } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="space-y-8 pb-32">
      
      {/* HEADER */}
      <div className="flex justify-between items-center bg-[#1E3A5F] anime-border p-6 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10">
          <h1 className="text-4xl font-black text-white mb-2 tracking-wide uppercase">
            Student <span className="text-[#F97316]">HQ</span>
          </h1>
          <p className="text-[#94A3B8] font-bold text-lg">Welcome back, Ninja in training!</p>
        </div>
        <div className="flex gap-4 relative z-10">
          <div className="bg-[#0A1628] anime-border px-6 py-3 rounded-xl text-center shadow-lg">
            <div className="text-[#F97316] font-black text-3xl flex items-center gap-2">
              <Flame size={24} className="text-[#F97316]" /> 450
            </div>
            <div className="text-xs font-bold text-gray-400 mt-1">TOTAL XP</div>
          </div>
          <div className="bg-[#0A1628] anime-border px-6 py-3 rounded-xl text-center shadow-lg">
            <div className="text-[#FFD700] font-black text-3xl flex items-center gap-2">
              <Trophy size={24} className="text-[#FFD700]" /> Genin
            </div>
            <div className="text-xs font-bold text-gray-400 mt-1">RANK</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* MAIN COLUMN (Missions & Continue Learning) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* MISSIONS GRID */}
          <section>
            <h2 className="text-2xl font-black text-white mb-6 uppercase flex items-center gap-3">
              <Target className="text-[#F97316]" size={32} />
              Today's Missions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Quiz Card */}
              <Link href="/student/quizzes" className="block">
                <div className="bg-[#1E3A5F] hover:bg-[#2A4B7C] anime-border p-6 rounded-2xl cursor-pointer transition-all hover:-translate-y-2 h-full flex flex-col group">
                  <div className="w-16 h-16 bg-[#F97316] rounded-2xl anime-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Target size={32} color="#000" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">Math Quiz: Algebra II</h3>
                  <p className="text-gray-400 font-bold mb-6 text-sm flex-1">Complete your daily quadratic equations mission to earn +50 XP!</p>
                  <div className="bg-[#0A1628] anime-border text-center py-3 rounded-xl font-black text-[#F97316] uppercase group-hover:bg-[#F97316] group-hover:text-black transition-colors">
                    Start Mission
                  </div>
                </div>
              </Link>

              {/* Study Guide Card */}
              <Link href="/student/study-guides" className="block">
                <div className="bg-[#1E3A5F] hover:bg-[#2A4B7C] anime-border p-6 rounded-2xl cursor-pointer transition-all hover:-translate-y-2 h-full flex flex-col group">
                  <div className="w-16 h-16 bg-[#FFD700] rounded-2xl anime-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Scroll size={32} color="#000" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">Science: Physics</h3>
                  <p className="text-gray-400 font-bold mb-6 text-sm flex-1">Review the scrolls on thermodynamics before tomorrow's exam.</p>
                  <div className="bg-[#0A1628] anime-border text-center py-3 rounded-xl font-black text-[#FFD700] uppercase group-hover:bg-[#FFD700] group-hover:text-black transition-colors">
                    Read Scroll
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* PERFORMANCE CHART AREA */}
          <section>
            <h2 className="text-2xl font-black text-white mb-6 uppercase flex items-center gap-3">
              <Activity className="text-[#3ddcff]" size={32} />
              Recent Training
            </h2>
            <div className="bg-[#1E3A5F] anime-border p-6 rounded-2xl">
              <div className="flex justify-between items-end h-48 pb-4 border-b-2 border-[#2A4B7C] px-4 gap-4">
                <div className="flex flex-col items-center justify-end gap-2 flex-1 h-full relative group">
                  <div className="absolute -top-8 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">40 XP</div>
                  <div className="w-full bg-gradient-to-t from-[#2A4B7C] to-[#3ddcff] rounded-t-sm" style={{ height: '40%' }} />
                  <span className="text-xs font-bold text-gray-400">Mon</span>
                </div>
                <div className="flex flex-col items-center justify-end gap-2 flex-1 h-full relative group">
                  <div className="absolute -top-8 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">65 XP</div>
                  <div className="w-full bg-gradient-to-t from-[#2A4B7C] to-[#3ddcff] rounded-t-sm" style={{ height: '65%' }} />
                  <span className="text-xs font-bold text-gray-400">Tue</span>
                </div>
                <div className="flex flex-col items-center justify-end gap-2 flex-1 h-full relative group">
                  <div className="absolute -top-8 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">30 XP</div>
                  <div className="w-full bg-gradient-to-t from-[#2A4B7C] to-[#3ddcff] rounded-t-sm" style={{ height: '30%' }} />
                  <span className="text-xs font-bold text-gray-400">Wed</span>
                </div>
                <div className="flex flex-col items-center justify-end gap-2 flex-1 h-full relative group">
                  <div className="absolute -top-8 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">85 XP</div>
                  <div className="w-full bg-gradient-to-t from-[#2A4B7C] to-[#3ddcff] rounded-t-sm" style={{ height: '85%' }} />
                  <span className="text-xs font-bold text-gray-400">Thu</span>
                </div>
                <div className="flex flex-col items-center justify-end gap-2 flex-1 h-full relative group">
                  <div className="absolute -top-8 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">100 XP</div>
                  <div className="w-full bg-[#F97316] rounded-t-sm anime-border border-b-0" style={{ height: '100%' }} />
                  <span className="text-xs font-bold text-[#F97316]">Today</span>
                </div>
              </div>
              <p className="text-center text-sm font-bold text-gray-400 mt-6">You've gained 320 XP this week! Keep it up!</p>
            </div>
          </section>

        </div>

        {/* SIDE COLUMN (Schedule & Library) */}
        <div className="space-y-8">
          
          {/* SCHEDULE */}
          <section>
            <h2 className="text-2xl font-black text-white mb-6 uppercase flex items-center gap-3">
              <Calendar className="text-[#a855f7]" size={32} />
              Schedule
            </h2>
            <div className="bg-[#1E3A5F] anime-border p-6 rounded-2xl flex flex-col gap-4">
              
              <div className="bg-[#0A1628] rounded-xl p-4 border-l-4 border-[#3ddcff]">
                <div className="text-[#3ddcff] text-xs font-black mb-1">09:00 AM - 10:30 AM</div>
                <div className="text-white font-bold">Advanced Ninjutsu (Math)</div>
                <div className="text-gray-400 text-xs">Room 4B</div>
              </div>

              <div className="bg-[#0A1628] rounded-xl p-4 border-l-4 border-[#F97316]">
                <div className="text-[#F97316] text-xs font-black mb-1">11:00 AM - 12:00 PM</div>
                <div className="text-white font-bold">Physical Training (P.E.)</div>
                <div className="text-gray-400 text-xs">Training Grounds</div>
              </div>

              <div className="bg-[#0A1628] rounded-xl p-4 border-l-4 border-[#FFD700]">
                <div className="text-[#FFD700] text-xs font-black mb-1">01:00 PM - 02:30 PM</div>
                <div className="text-white font-bold">Scroll Analysis (History)</div>
                <div className="text-gray-400 text-xs">Library Sector 7</div>
              </div>

            </div>
          </section>

          {/* QUICK LINKS */}
          <section>
            <h2 className="text-2xl font-black text-white mb-6 uppercase flex items-center gap-3">
              <Book className="text-[#4ADE80]" size={32} />
              Library
            </h2>
            <Link href="/student/materials" className="block">
              <div className="bg-[#1E3A5F] hover:bg-[#2A4B7C] anime-border p-6 rounded-2xl cursor-pointer transition-transform hover:-translate-y-2 flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#4ADE80] rounded-xl anime-border flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Book size={24} color="#000" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">History Archives</h3>
                  <p className="text-gray-400 font-bold text-xs mt-1">Access reading assignments</p>
                </div>
              </div>
            </Link>
          </section>

        </div>
      </div>

    </div>
  );
}
