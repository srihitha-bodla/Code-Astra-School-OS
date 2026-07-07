"use client";
import React from "react";
import { Shield, Key, AlertTriangle, Activity, Lock } from "lucide-react";

export default function AdminSecurityPage() {
  return (
    <div className="space-y-8 pb-12 max-w-5xl">
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Security & Access</h1>
        <p className="text-gray-400">Monitor system access logs and manage security policies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Security Policies */}
        <div className="bg-[#121826] border border-white/10 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Shield className="text-[#8b7cff]" /> Global Security Policies
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-white/5">
              <div>
                <div className="font-semibold text-white flex items-center gap-2">
                  <Key size={16} className="text-[#8b7cff]"/> Two-Factor Auth (2FA)
                </div>
                <div className="text-sm text-gray-400">Require 2FA for all staff accounts.</div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded bg-black/30 border-white/20 text-[#8b7cff] focus:ring-0" />
            </div>

            <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-white/5">
              <div>
                <div className="font-semibold text-white flex items-center gap-2">
                  <Lock size={16} className="text-[#8b7cff]"/> Password Expiry
                </div>
                <div className="text-sm text-gray-400">Force password reset every 90 days.</div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 rounded bg-black/30 border-white/20 text-[#8b7cff] focus:ring-0" />
            </div>

            <div className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-white/5">
              <div>
                <div className="font-semibold text-white flex items-center gap-2">
                  <AlertTriangle size={16} className="text-yellow-400"/> Strict IP Binding
                </div>
                <div className="text-sm text-gray-400">Restrict admin access to school network only.</div>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded bg-black/30 border-white/20 text-[#8b7cff] focus:ring-0" />
            </div>
            
            <button className="w-full bg-[#8b7cff] text-black font-bold py-3 rounded-lg hover:bg-[#7262eb] transition-colors mt-4">
              Apply Policies
            </button>
          </div>
        </div>

        {/* Access Logs */}
        <div className="bg-[#121826] border border-white/10 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Activity className="text-[#3ddcff]" /> Recent Access Logs
            </h2>
          </div>
          <div className="p-0">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-gray-400">
                <tr>
                  <th className="px-6 py-3 font-semibold">User</th>
                  <th className="px-6 py-3 font-semibold">IP Address</th>
                  <th className="px-6 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                <tr className="hover:bg-white/5">
                  <td className="px-6 py-4">K. Hatake (Teacher)</td>
                  <td className="px-6 py-4 font-mono text-xs">192.168.1.45</td>
                  <td className="px-6 py-4"><span className="text-green-400">Success</span></td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="px-6 py-4">S. Uchiha (Student)</td>
                  <td className="px-6 py-4 font-mono text-xs">10.0.0.12</td>
                  <td className="px-6 py-4"><span className="text-green-400">Success</span></td>
                </tr>
                <tr className="hover:bg-white/5 bg-red-500/10">
                  <td className="px-6 py-4">Unknown</td>
                  <td className="px-6 py-4 font-mono text-xs">185.23.4.19</td>
                  <td className="px-6 py-4"><span className="text-red-400">Failed (Lockout)</span></td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="px-6 py-4">Admin Office</td>
                  <td className="px-6 py-4 font-mono text-xs">192.168.1.1</td>
                  <td className="px-6 py-4"><span className="text-green-400">Success</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
