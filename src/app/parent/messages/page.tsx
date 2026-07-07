"use client";
import React, { useState } from "react";
import { Search, Send, Image, Paperclip, MoreVertical } from "lucide-react";

export default function ParentMessagesPage() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-120px)] bg-[#121826] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
      
      {/* Sidebar - Chat List */}
      <div className="w-full md:w-80 border-r border-white/10 flex flex-col bg-black/20">
        <div className="p-4 border-b border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search teachers..." 
              className="w-full bg-black/40 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white outline-none focus:border-[#d9b46b]"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 border-b border-white/5 bg-white/5 cursor-pointer border-l-4 border-l-[#d9b46b]">
            <div className="flex justify-between items-start mb-1">
              <span className="font-bold text-white text-sm">Mr. Hatake</span>
              <span className="text-xs text-[#d9b46b]">10:42 AM</span>
            </div>
            <p className="text-xs text-gray-400 truncate">Yes, the chakra control exercise is...</p>
          </div>
          
          <div className="p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors">
            <div className="flex justify-between items-start mb-1">
              <span className="font-bold text-white text-sm">Mr. Sarutobi</span>
              <span className="text-xs text-gray-500">Yesterday</span>
            </div>
            <p className="text-xs text-gray-400 truncate">He needs to submit the history essay.</p>
          </div>

          <div className="p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors">
            <div className="flex justify-between items-start mb-1">
              <span className="font-bold text-white text-sm">Admin Office</span>
              <span className="text-xs text-gray-500">Oct 12</span>
            </div>
            <p className="text-xs text-gray-400 truncate">Please sign the permission slip for the...</p>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-[#121826]">
        {/* Chat Header */}
        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#d9b46b]/20 flex items-center justify-center font-bold text-[#d9b46b]">
              H
            </div>
            <div>
              <div className="font-bold text-white">Kakashi Hatake</div>
              <div className="text-xs text-green-400">Online</div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white"><MoreVertical size={20}/></button>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex flex-col items-center my-4">
            <span className="text-xs text-gray-500 bg-black/40 px-3 py-1 rounded-full border border-white/5">Today</span>
          </div>

          <div className="flex justify-end">
            <div className="bg-[#d9b46b] text-black rounded-2xl rounded-tr-sm p-4 max-w-md shadow-lg">
              <p className="text-sm font-medium">Hello Mr. Hatake, I saw Naruto's recent grade. Is there anything he needs to practice at home?</p>
              <span className="text-[10px] opacity-70 mt-2 block text-right">10:30 AM</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="bg-white/10 border border-white/5 text-white rounded-2xl rounded-tl-sm p-4 max-w-md shadow-lg">
              <p className="text-sm">Hi! Yes, the chakra control exercise is something he struggles with when distracted. Have him practice focusing on a leaf on his forehead for 15 minutes a day.</p>
              <span className="text-[10px] text-gray-400 mt-2 block text-right">10:42 AM</span>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-white/10 bg-black/20">
          <div className="flex items-end gap-2 bg-black/40 border border-white/10 rounded-xl p-2 focus-within:border-[#d9b46b] transition-colors">
            <button className="p-2 text-gray-400 hover:text-white"><Paperclip size={20}/></button>
            <button className="p-2 text-gray-400 hover:text-white"><Image size={20}/></button>
            <textarea 
              rows={1}
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-transparent text-white outline-none resize-none py-2 text-sm"
            />
            <button className="p-2 bg-[#d9b46b] text-black rounded-lg hover:bg-[#c29c54] transition-colors shadow-[0_0_10px_rgba(217,180,107,0.3)]">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
