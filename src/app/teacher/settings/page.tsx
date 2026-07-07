"use client";
import React from "react";
import { User, Bell, Lock, Globe, Save } from "lucide-react";

export default function TeacherSettingsPage() {
  return (
    <div className="space-y-8 pb-12 max-w-4xl">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your profile, notifications, and security preferences.</p>
      </div>

      <div className="bg-[#121826] border border-white/10 rounded-xl overflow-hidden">
        
        {/* Profile Section */}
        <div className="p-8 border-b border-white/10">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <User className="text-[#4f8dff]" /> Profile Information
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 rounded-full bg-[#4f8dff]/20 flex items-center justify-center shrink-0 border border-[#4f8dff]/50">
              <span className="text-3xl text-[#4f8dff] font-bold">K</span>
            </div>
            <div className="flex-1 space-y-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">First Name</label>
                  <input type="text" defaultValue="Kakashi" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none focus:border-[#4f8dff]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Last Name</label>
                  <input type="text" defaultValue="Hatake" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none focus:border-[#4f8dff]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                <input type="email" defaultValue="k.hatake@schoolos.edu" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none focus:border-[#4f8dff]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Bio / Tagline</label>
                <textarea rows={2} defaultValue="Lead Teacher of Ninjutsu. Remember, those who break the rules are scum, but those who abandon their friends are worse than scum." className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none focus:border-[#4f8dff]" />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="p-8 border-b border-white/10">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Bell className="text-[#4f8dff]" /> Notification Preferences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-white/5">
              <div>
                <div className="font-semibold text-white">Direct Messages</div>
                <div className="text-sm text-gray-400">Receive alerts when students or parents message you.</div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded bg-black/30 border-white/20 text-[#4f8dff] focus:ring-0" />
            </div>
            <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-white/5">
              <div>
                <div className="font-semibold text-white">Homework Submissions</div>
                <div className="text-sm text-gray-400">Get notified when a student submits an assignment late.</div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded bg-black/30 border-white/20 text-[#4f8dff] focus:ring-0" />
            </div>
            <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-white/5">
              <div>
                <div className="font-semibold text-white">Admin Broadcasts</div>
                <div className="text-sm text-gray-400">Mandatory system alerts and holidays.</div>
              </div>
              <input type="checkbox" defaultChecked disabled className="w-5 h-5 rounded bg-gray-600 border-gray-500 text-[#4f8dff] opacity-50 cursor-not-allowed" />
            </div>
          </div>
        </div>

        {/* Save */}
        <div className="p-8 bg-black/30 flex justify-end">
          <button className="bg-[#4f8dff] text-black px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#3d7be5] transition-colors flex items-center gap-2">
            <Save size={18} /> Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}
