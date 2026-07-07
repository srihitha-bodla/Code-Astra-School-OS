"use client";
import React from "react";
import { Bell, Megaphone, CheckCircle, AlertTriangle } from "lucide-react";

export default function ParentNotificationsPage() {
  return (
    <div className="space-y-8 pb-12 max-w-4xl">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Notifications</h1>
          <p className="text-gray-400">Important alerts and announcements regarding your child.</p>
        </div>
        <button className="text-sm text-[#d9b46b] hover:underline">Mark all as read</button>
      </div>

      <div className="space-y-4">
        {/* Admin Broadcast Mock */}
        <div className="bg-[#121826] border border-[#d9b46b]/30 rounded-xl p-5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#d9b46b]" />
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-[#d9b46b]/20 flex items-center justify-center shrink-0">
              <Megaphone className="text-[#d9b46b]" size={24} />
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-white text-lg">School Closure: Village Foundation Day</h3>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <p className="text-sm text-gray-300">
                <strong>Admin Broadcast:</strong> Please note that the Academy will be closed next Monday in observance of the Village Foundation Day. All classes and extracurricular activities are canceled.
              </p>
            </div>
          </div>
        </div>

        {/* Attendance Alert */}
        <div className="bg-[#121826] border border-white/10 rounded-xl p-5 relative overflow-hidden">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-red-400/10 flex items-center justify-center shrink-0">
              <AlertTriangle className="text-red-400" size={24} />
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-white text-lg">Tardy Notice: Naruto Uzumaki</h3>
                <span className="text-xs text-gray-500">Yesterday</span>
              </div>
              <p className="text-sm text-gray-300">
                Naruto arrived 15 minutes late to Advanced Ninjutsu with Mr. Hatake.
              </p>
            </div>
          </div>
        </div>

        {/* Grade Alert */}
        <div className="bg-[#121826] border border-white/10 rounded-xl p-5 relative overflow-hidden">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center shrink-0">
              <CheckCircle className="text-green-400" size={24} />
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-white text-lg">Grade Updated: Naruto Uzumaki</h3>
                <span className="text-xs text-gray-500">3 days ago</span>
              </div>
              <p className="text-sm text-gray-300">
                Naruto received an <strong>A (92%)</strong> on the recent History of Shinobi exam. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
