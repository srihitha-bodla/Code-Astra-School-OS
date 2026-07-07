"use client";
import React, { useState } from "react";
import { Plus, Search, Calendar, Clock, BookOpen, User, CheckCircle, X } from "lucide-react";

export default function TeacherPlannerPage() {
  const [showHomeworkModal, setShowHomeworkModal] = useState(false);
  const [homeworkTitle, setHomeworkTitle] = useState("");

  const handleCreateHomework = (e: React.FormEvent) => {
    e.preventDefault();
    setShowHomeworkModal(false);
    alert("Homework published to Student Portal!");
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Lesson Planner</h1>
          <p className="text-gray-400">Plan your week, create homework, and send daily updates.</p>
        </div>
        
        <button 
          onClick={() => setShowHomeworkModal(true)}
          className="bg-[#4f8dff] text-black px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#3d7be5] transition-colors flex items-center gap-2"
        >
          <Plus size={18} /> Create Homework
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar / Weekly View */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#121826] border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Calendar className="text-[#4f8dff]" /> This Week's Lessons
            </h2>
            
            <div className="space-y-4">
              {/* Monday */}
              <div className="flex gap-4 items-start">
                <div className="w-12 pt-1 text-center font-bold text-gray-500">MON</div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white">Advanced Ninjutsu</h3>
                    <span className="text-xs bg-[#4f8dff]/20 text-[#4f8dff] px-2 py-1 rounded">09:00 AM</span>
                  </div>
                  <p className="text-sm text-gray-400">Chakra control basics. Practical exam preparation.</p>
                </div>
              </div>

              {/* Tuesday */}
              <div className="flex gap-4 items-start">
                <div className="w-12 pt-1 text-center font-bold text-white">TUE</div>
                <div className="flex-1 bg-[#4f8dff]/10 border border-[#4f8dff]/30 rounded-lg p-4 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#4f8dff] rounded-l-lg" />
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white">History of Shinobi</h3>
                    <span className="text-xs bg-[#4f8dff] text-black px-2 py-1 rounded font-bold">10:30 AM (Now)</span>
                  </div>
                  <p className="text-sm text-[#4f8dff]">Chapter 4: The 3rd Great War. Group discussion.</p>
                </div>
              </div>

              {/* Wednesday */}
              <div className="flex gap-4 items-start">
                <div className="w-12 pt-1 text-center font-bold text-gray-500">WED</div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white">Basic Taijutsu</h3>
                    <span className="text-xs bg-[#4f8dff]/20 text-[#4f8dff] px-2 py-1 rounded">01:00 PM</span>
                  </div>
                  <p className="text-sm text-gray-400">Endurance training and sparring.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Active Assignments */}
        <div className="space-y-6">
          <div className="bg-[#121826] border border-white/10 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">Active Homework</h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold text-white text-sm">Read Chapter 4</h4>
                <p className="text-xs text-gray-400 mt-1 mb-3">Due: Tomorrow, 8:00 AM</p>
                <div className="w-full bg-black rounded-full h-1.5 mb-1">
                  <div className="bg-[#4f8dff] h-1.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>18/28 Submitted</span>
                  <span>65%</span>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-black/20">
                <h4 className="font-semibold text-white text-sm">Math Worksheet</h4>
                <p className="text-xs text-gray-400 mt-1 mb-3">Due: Friday, 5:00 PM</p>
                <div className="w-full bg-black rounded-full h-1.5 mb-1">
                  <div className="bg-[#facc15] h-1.5 rounded-full" style={{ width: '20%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5/28 Submitted</span>
                  <span>20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Homework Modal */}
      {showHomeworkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#121826] border border-white/10 rounded-2xl max-w-lg w-full shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-white/10 p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen size={20} className="text-[#4f8dff]" /> Create Homework
              </h3>
              <button onClick={() => setShowHomeworkModal(false)} className="text-gray-400 hover:text-white"><X size={20}/></button>
            </div>
            <form onSubmit={handleCreateHomework} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Class / Subject</label>
                <select className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#4f8dff]">
                  <option>History of Shinobi</option>
                  <option>Advanced Ninjutsu</option>
                  <option>Basic Taijutsu</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Title</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Read Chapter 5"
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#4f8dff]"
                  value={homeworkTitle}
                  onChange={(e) => setHomeworkTitle(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Instructions</label>
                <textarea 
                  rows={3}
                  placeholder="Provide detailed instructions for the students..."
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#4f8dff]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Due Date</label>
                  <input type="date" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#4f8dff] [color-scheme:dark]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Points</label>
                  <input type="number" defaultValue="10" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#4f8dff]" />
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#4f8dff] text-black font-bold py-3 rounded-lg hover:bg-[#3d7be5] transition-colors mt-4"
              >
                Publish Homework
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
