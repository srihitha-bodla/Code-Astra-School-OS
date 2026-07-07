"use client";
import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AiChatPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "Yo! Kakashi here. 🌀 Got a doubt or need help with a mission?" },
  ]);

  const handleSend = () => {
    if (!msg.trim()) return;
    setChat((prev) => [...prev, { role: "user", content: msg }]);
    
    // Simulate AI response
    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        { role: "ai", content: "Hmm... interesting question. Remember, look underneath the underneath! Let's solve this step by step." },
      ]);
    }, 1000);
    
    setMsg("");
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#F97316] rounded-full anime-border flex items-center justify-center z-50 shadow-[4px_4px_0_#000]"
        >
          <span className="text-3xl">🌀</span>
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 w-[350px] h-[500px] bg-[#1E3A5F] rounded-2xl anime-border flex flex-col overflow-hidden z-50 shadow-[8px_8px_0_#000]"
          >
            {/* Header */}
            <div className="bg-[#0A1628] p-4 flex justify-between items-center border-b-4 border-black">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F97316] rounded-full anime-border flex items-center justify-center text-xl">
                  🌀
                </div>
                <div>
                  <h3 className="text-white font-black uppercase tracking-wider">Kakashi Sensei</h3>
                  <p className="text-[#94A3B8] text-xs font-bold">AI Support Ninja</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#F97316]">
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-[#0A1628]">
              {chat.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl anime-border text-sm font-bold ${
                    m.role === "user" ? "bg-[#F97316] text-black rounded-tr-none" : "bg-[#1E3A5F] text-white rounded-tl-none"
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-[#0A1628] border-t-4 border-black flex gap-2">
              <input
                type="text"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask Kakashi..."
                className="flex-1 anime-input rounded-xl px-4 py-2 text-sm font-bold"
              />
              <button
                onClick={handleSend}
                className="bg-[#4ADE80] w-10 h-10 rounded-xl anime-border flex items-center justify-center text-black hover:-translate-y-1 transition-transform"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
