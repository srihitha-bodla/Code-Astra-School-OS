"use client";
import React, { useState } from "react";
import { Users, BookOpen, Activity, AlertOctagon, Plus, X, Megaphone } from "lucide-react";

export default function AdminDashboard() {
  const [showAnnounceModal, setShowAnnounceModal] = useState(false);
  const [announceTitle, setAnnounceTitle] = useState("");
  const [announceType, setAnnounceType] = useState("Holiday");

  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAnnounceModal(false);
    alert("Announcement Broadcasted to all Portals!");
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">System overview and control center.</p>
        </div>
        <button 
          onClick={() => setShowAnnounceModal(true)}
          className="bg-[#8b7cff] text-black px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#7262eb] transition-colors flex items-center gap-2"
        >
          <Megaphone size={18} /> Broadcast Announcement
        </button>
      </div>
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#121826] border border-white/10 p-5 rounded-xl">
          <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Active Students</div>
          <div className="text-3xl font-bold text-white flex items-center gap-3">
            1,284 <Users size={20} className="text-[#8b7cff]" />
          </div>
        </div>
        <div className="bg-[#121826] border border-white/10 p-5 rounded-xl">
          <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Active Teachers</div>
          <div className="text-3xl font-bold text-white flex items-center gap-3">
            85 <BookOpen size={20} className="text-[#3ddcff]" />
          </div>
        </div>
        <div className="bg-[#121826] border border-white/10 p-5 rounded-xl">
          <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Avg Attendance</div>
          <div className="text-3xl font-bold text-white flex items-center gap-3">
            96% <Activity size={20} className="text-[#4ade80]" />
          </div>
        </div>
        <div className="bg-[#121826] border border-white/10 p-5 rounded-xl border-l-2 border-l-[#facc15]">
          <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">System Alerts</div>
          <div className="text-3xl font-bold text-white flex items-center gap-3">
            1 <AlertOctagon size={20} className="text-[#facc15]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* District Performance */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-4">School-wide Performance</h2>
          <div className="bg-[#121826] border border-white/10 rounded-xl p-6 h-64 flex flex-col justify-end gap-2 relative">
            <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-20">
              <div className="border-b border-white/20 w-full" />
              <div className="border-b border-white/20 w-full" />
              <div className="border-b border-white/20 w-full" />
              <div className="border-b border-white/20 w-full" />
            </div>
            <div className="flex justify-between items-end h-[180px] z-10 w-full px-4 gap-8">
              <div className="flex flex-col items-center flex-1 group">
                <div className="w-full bg-[#3ddcff]/20 group-hover:bg-[#3ddcff]/40 rounded-t-sm h-[60%] border-t-2 border-[#3ddcff] transition-all relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-white opacity-0 group-hover:opacity-100">60%</div>
                </div>
                <span className="text-xs text-gray-400 mt-2 font-mono">Q1</span>
              </div>
              <div className="flex flex-col items-center flex-1 group">
                <div className="w-full bg-[#4f8dff]/20 group-hover:bg-[#4f8dff]/40 rounded-t-sm h-[75%] border-t-2 border-[#4f8dff] transition-all relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-white opacity-0 group-hover:opacity-100">75%</div>
                </div>
                <span className="text-xs text-gray-400 mt-2 font-mono">Q2</span>
              </div>
              <div className="flex flex-col items-center flex-1 group">
                <div className="w-full bg-[#8b7cff]/20 group-hover:bg-[#8b7cff]/40 rounded-t-sm h-[68%] border-t-2 border-[#8b7cff] transition-all relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-white opacity-0 group-hover:opacity-100">68%</div>
                </div>
                <span className="text-xs text-gray-400 mt-2 font-mono">Q3</span>
              </div>
              <div className="flex flex-col items-center flex-1 group">
                <div className="w-full bg-[#d9b46b]/20 group-hover:bg-[#d9b46b]/40 rounded-t-sm h-[92%] border-t-2 border-[#d9b46b] transition-all relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-white opacity-0 group-hover:opacity-100">92%</div>
                </div>
                <span className="text-xs text-gray-400 mt-2 font-mono">Q4</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Admin Summary */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Executive AI Report</h2>
          <div className="bg-[#121826] border border-white/10 rounded-xl p-6 space-y-4">
            <div className="flex gap-4 border-b border-white/5 pb-4">
              <div className="w-8 h-8 rounded-full bg-[#8b7cff]/20 flex items-center justify-center shrink-0">
                <span className="text-xl text-[#8b7cff]">🤖</span>
              </div>
              <div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">Trend Detected:</span> Overall school attendance has dropped by 4% this month. Mostly concentrated in 11th grade morning classes.
                </p>
                <button className="text-[#8b7cff] text-xs font-semibold mt-2 hover:underline">View detailed report</button>
              </div>
            </div>
            
            <div className="flex gap-4 border-b border-white/5 pb-4">
              <div className="w-8 h-8 rounded-full bg-[#8b7cff]/20 flex items-center justify-center shrink-0">
                <span className="text-xl text-[#8b7cff]">🤖</span>
              </div>
              <div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="font-semibold text-white">Budget Optimization:</span> Server usage is lower than expected for the Science Department. You can safely downgrade tier 2 instances.
                </p>
                <button className="text-[#8b7cff] text-xs font-semibold mt-2 hover:underline">Adjust billing</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Broadcast Modal */}
      {showAnnounceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#121826] border border-white/10 rounded-2xl max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-white/10 p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Megaphone size={20} className="text-[#8b7cff]" /> New Announcement
              </h3>
              <button onClick={() => setShowAnnounceModal(false)} className="text-gray-400 hover:text-white"><X size={20}/></button>
            </div>
            <form onSubmit={handleBroadcast} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Announcement Type</label>
                <select 
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#8b7cff]"
                  value={announceType}
                  onChange={(e) => setAnnounceType(e.target.value)}
                >
                  <option>Holiday / Closure</option>
                  <option>Event</option>
                  <option>System Maintenance</option>
                  <option>Important Alert</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea 
                  required
                  rows={3}
                  placeholder="e.g. School will be closed next Monday for..."
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#8b7cff]"
                  value={announceTitle}
                  onChange={(e) => setAnnounceTitle(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                <input type="checkbox" defaultChecked className="rounded bg-black/30 border-white/10 text-[#8b7cff]" /> 
                Push to Student & Parent Portals
              </div>
              <button 
                type="submit"
                className="w-full bg-[#8b7cff] text-black font-bold py-3 rounded-lg hover:bg-[#7262eb] transition-colors mt-4"
              >
                Send Broadcast
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
