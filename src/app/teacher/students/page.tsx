"use client";
import React, { useState } from "react";
import { Search, Filter, MoreVertical, Mail, User } from "lucide-react";

const mockStudents = [
  { id: 1, name: "Naruto Uzumaki", grade: "10th", attendance: "92%", lastScore: "85%", status: "Improving", color: "text-green-400", bg: "bg-green-400/10" },
  { id: 2, name: "Sasuke Uchiha", grade: "10th", attendance: "98%", lastScore: "96%", status: "Excellent", color: "text-blue-400", bg: "bg-blue-400/10" },
  { id: 3, name: "Sakura Haruno", grade: "10th", attendance: "100%", lastScore: "94%", status: "Excellent", color: "text-blue-400", bg: "bg-blue-400/10" },
  { id: 4, name: "Shikamaru Nara", grade: "10th", attendance: "85%", lastScore: "99%", status: "Low Attendance", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { id: 5, name: "Choji Akimichi", grade: "10th", attendance: "95%", lastScore: "72%", status: "Needs Review", color: "text-orange-400", bg: "bg-orange-400/10" },
  { id: 6, name: "Kiba Inuzuka", grade: "10th", attendance: "88%", lastScore: "78%", status: "Average", color: "text-gray-300", bg: "bg-gray-300/10" },
  { id: 7, name: "Hinata Hyuga", grade: "10th", attendance: "99%", lastScore: "89%", status: "Good", color: "text-green-400", bg: "bg-green-400/10" },
  { id: 8, name: "Shino Aburame", grade: "10th", attendance: "100%", lastScore: "88%", status: "Good", color: "text-green-400", bg: "bg-green-400/10" },
];

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = mockStudents.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Student Directory</h1>
          <p className="text-gray-400">Manage your students, view performance, and send messages.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search students..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#121826] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#4f8dff] transition-colors"
            />
          </div>
          <button className="bg-[#121826] border border-white/10 p-2.5 rounded-lg text-gray-400 hover:text-white hover:border-[#4f8dff] transition-colors flex items-center justify-center">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#121826] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-xs text-gray-400 uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Student Name</th>
                <th className="px-6 py-4 font-semibold">Grade</th>
                <th className="px-6 py-4 font-semibold">Attendance</th>
                <th className="px-6 py-4 font-semibold">Last Quiz</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm text-gray-200">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#4f8dff]/20 flex items-center justify-center">
                          <User size={16} className="text-[#4f8dff]" />
                        </div>
                        <span className="font-semibold text-white group-hover:text-[#4f8dff] transition-colors cursor-pointer">{student.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{student.grade}</td>
                    <td className="px-6 py-4 font-mono">{student.attendance}</td>
                    <td className="px-6 py-4 font-mono">{student.lastScore}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-md ${student.bg} ${student.color}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors" title="Message Student">
                          <Mail size={16} />
                        </button>
                        <button className="p-1.5 hover:bg-white/10 rounded-md text-gray-400 hover:text-white transition-colors" title="More Options">
                          <MoreVertical size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                    No students found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="border-t border-white/10 px-6 py-4 flex items-center justify-between bg-black/20">
          <span className="text-xs text-gray-500">Showing {filteredStudents.length} of {mockStudents.length} students</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs border border-white/10 rounded hover:bg-white/5 disabled:opacity-50 text-gray-400" disabled>Previous</button>
            <button className="px-3 py-1 text-xs border border-white/10 rounded hover:bg-white/5 text-gray-400">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
