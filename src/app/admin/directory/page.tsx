"use client";
import React, { useState } from "react";
import { Search, Plus, Filter, UserCheck, BookOpen, UserPlus, X } from "lucide-react";

export default function AdminDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);

  const staff = [
    { id: 1, name: "Kakashi Hatake", role: "Lead Teacher", department: "Ninjutsu & Math", assignedClasses: "Math 101, Adv Algebra", status: "Active" },
    { id: 2, name: "Might Guy", role: "Instructor", department: "Taijutsu & P.E.", assignedClasses: "P.E. 101, Fitness", status: "Active" },
    { id: 3, name: "Kurenai Yuhi", role: "Teacher", department: "Genjutsu & Physics", assignedClasses: "Physics II", status: "Active" },
    { id: 4, name: "Asuma Sarutobi", role: "Instructor", department: "History", assignedClasses: "World History", status: "Active" },
    { id: 5, name: "Iruka Umino", role: "Teacher", department: "General Studies", assignedClasses: "Homeroom 10A", status: "Active" },
  ];

  const filteredStaff = staff.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleAssignClick = (name: string) => {
    setSelectedTeacher(name);
    setShowAssignModal(true);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Staff Directory</h1>
          <p className="text-gray-400">Manage teachers, staff, and assign class schedules.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="bg-[#8b7cff] text-black px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#7262eb] transition-colors flex items-center gap-2">
            <UserPlus size={18} /> Add Staff
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search directory..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#121826] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#8b7cff] transition-colors"
          />
        </div>
        <button className="bg-[#121826] border border-white/10 px-4 py-2.5 rounded-lg text-gray-400 hover:text-white hover:border-[#8b7cff] transition-colors flex items-center gap-2">
          <Filter size={18} /> Filter
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#121826] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 text-xs text-gray-400 uppercase tracking-wider border-b border-white/10">
              <th className="px-6 py-4 font-semibold">Name & Role</th>
              <th className="px-6 py-4 font-semibold">Department</th>
              <th className="px-6 py-4 font-semibold">Assigned Classes</th>
              <th className="px-6 py-4 font-semibold text-center">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-sm text-gray-200">
            {filteredStaff.map((person) => (
              <tr key={person.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#8b7cff]/20 flex items-center justify-center font-bold text-[#8b7cff]">
                      {person.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{person.name}</div>
                      <div className="text-xs text-gray-400">{person.role}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">{person.department}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-[#3ddcff]">
                    <BookOpen size={16} />
                    {person.assignedClasses}
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-green-400/10 text-green-400 inline-flex items-center gap-1">
                    <UserCheck size={14} /> {person.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={() => handleAssignClick(person.name)}
                    className="text-xs font-semibold bg-white/10 hover:bg-[#8b7cff] hover:text-black text-white px-3 py-1.5 rounded transition-colors"
                  >
                    Assign Class
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Assign Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#121826] border border-white/10 rounded-2xl max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-white/10 p-6">
              <h3 className="text-xl font-bold text-white">Assign Class to {selectedTeacher}</h3>
              <button onClick={() => setShowAssignModal(false)} className="text-gray-400 hover:text-white"><X size={20}/></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Select Subject/Class</label>
                <select className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#8b7cff]">
                  <option>Advanced Ninjutsu (Math 201)</option>
                  <option>Basic Taijutsu (P.E. 101)</option>
                  <option>History of the Hidden Leaf</option>
                  <option>Genjutsu Theory</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Schedule Time</label>
                <div className="grid grid-cols-2 gap-2">
                  <input type="time" className="bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white" defaultValue="09:00" />
                  <input type="time" className="bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white" defaultValue="10:30" />
                </div>
              </div>
              <button 
                onClick={() => setShowAssignModal(false)}
                className="w-full bg-[#8b7cff] text-black font-bold py-3 rounded-lg hover:bg-[#7262eb] transition-colors mt-4"
              >
                Confirm Assignment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
