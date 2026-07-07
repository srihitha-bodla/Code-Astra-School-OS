"use client";
import React from "react";
import { Target, Clock, Trophy, Flame } from "lucide-react";

export default function StudentQuizzesPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="border-b-4 border-black pb-4">
        <h1 className="text-4xl font-black text-white uppercase italic tracking-wider">My Quizzes</h1>
        <p className="text-gray-400 mt-2 font-semibold">Test your knowledge and level up your skills.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Active Quizzes */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Target className="text-red-400" /> Pending Tests
          </h2>

          <div className="bg-[#1E3A5F] border-4 border-black rounded-xl p-6 relative group transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_#000]">
            <div className="absolute top-0 right-0 bg-red-400 text-black text-xs font-black px-3 py-1 border-b-4 border-l-4 border-black rounded-bl-xl">
              DUE IN 2 DAYS
            </div>
            <h3 className="text-xl font-bold text-white mb-2">History Midterm</h3>
            <p className="text-sm text-gray-300 mb-4">Covers Chapters 1-4 • 50 Questions</p>
            
            <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-6">
              <span className="flex items-center gap-1"><Clock size={14}/> 45 Mins</span>
              <span className="flex items-center gap-1"><Trophy size={14}/> 100 Points</span>
            </div>

            <button className="w-full bg-red-400 text-black font-black uppercase tracking-wider py-3 border-4 border-black rounded-xl hover:bg-red-500 transition-colors shadow-[4px_4px_0_#000] active:translate-y-1 active:shadow-none">
              Start Quiz
            </button>
          </div>
        </div>

        {/* Completed Quizzes */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <CheckCircle className="text-green-400" /> Completed
          </h2>

          <div className="bg-black/30 border-4 border-black rounded-xl p-6 opacity-70 hover:opacity-100 transition-opacity">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Chakra Control Quiz 1</h3>
                <p className="text-xs text-gray-400">Completed on Oct 12</p>
              </div>
              <div className="bg-green-400/20 text-green-400 font-black text-xl px-3 py-1 rounded-lg border-2 border-green-500">
                92%
              </div>
            </div>
            <button className="text-sm font-bold text-white underline decoration-green-400 underline-offset-4 hover:text-green-400 transition-colors">
              Review Answers
            </button>
          </div>

          <div className="bg-black/30 border-4 border-black rounded-xl p-6 opacity-70 hover:opacity-100 transition-opacity">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Genjutsu Basics</h3>
                <p className="text-xs text-gray-400">Completed on Oct 05</p>
              </div>
              <div className="bg-red-400/20 text-red-400 font-black text-xl px-3 py-1 rounded-lg border-2 border-red-500">
                68%
              </div>
            </div>
            <button className="text-sm font-bold text-white underline decoration-red-400 underline-offset-4 hover:text-red-400 transition-colors">
              Review Answers
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// Quick hack for the missing CheckCircle icon
import { CheckCircle } from "lucide-react";
