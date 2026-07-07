"use client";
import React from "react";
import { Settings, Save, Globe, Database, Mail } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8 pb-12 max-w-4xl">
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">System Settings</h1>
        <p className="text-gray-400">Configure global platform settings for the entire district.</p>
      </div>

      <div className="bg-[#121826] border border-white/10 rounded-xl overflow-hidden">
        
        {/* General Information */}
        <div className="p-8 border-b border-white/10">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Globe className="text-[#8b7cff]" /> General Information
          </h2>
          <div className="space-y-4 max-w-2xl">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">School Name</label>
              <input type="text" defaultValue="Hidden Leaf Academy" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none focus:border-[#8b7cff]" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Academic Year</label>
                <select className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none focus:border-[#8b7cff]">
                  <option>2026 - 2027</option>
                  <option>2025 - 2026</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Timezone</label>
                <select className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2.5 text-white outline-none focus:border-[#8b7cff]">
                  <option>UTC+09:00 (Konoha Time)</option>
                  <option>EST</option>
                  <option>PST</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations & Services */}
        <div className="p-8 border-b border-white/10">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Database className="text-[#8b7cff]" /> External Integrations
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-white/5">
              <div>
                <div className="font-semibold text-white flex items-center gap-2">Google Workspace Sync</div>
                <div className="text-sm text-gray-400">Sync staff calendars and documents automatically.</div>
              </div>
              <button className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition-colors">
                Configure
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-white/5">
              <div>
                <div className="font-semibold text-white flex items-center gap-2">Kakashi AI Engine</div>
                <div className="text-sm text-green-400">Connected & Operational</div>
              </div>
              <button className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition-colors">
                Manage Keys
              </button>
            </div>
          </div>
        </div>

        {/* Save */}
        <div className="p-8 bg-black/30 flex justify-end">
          <button className="bg-[#8b7cff] text-black px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#7262eb] transition-colors flex items-center gap-2">
            <Save size={18} /> Save Configuration
          </button>
        </div>

      </div>
    </div>
  );
}
