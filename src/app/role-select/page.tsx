"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Users, BookOpen, Shield, ArrowLeft, Loader2 } from "lucide-react";
import Logo from "@/components/Logo";

export default function RoleSelectPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      router.push(`/${selectedRole}/dashboard`);
    }, 1500);
  };

  const roles = [
    { id: "student", name: "Student", icon: User, color: "#3ddcff", desc: "Access assignments, AI assistant, and your learning path.", style: "node-tl" },
    { id: "teacher", name: "Teacher", icon: BookOpen, color: "#4f8dff", desc: "Manage classes, grading, and AI lesson plans.", style: "node-tr" },
    { id: "parent", name: "Parent", icon: Users, color: "#d9b46b", desc: "View progress reports, attendance, and notifications.", style: "node-bl" },
    { id: "admin", name: "Administrator", icon: Shield, color: "#8b7cff", desc: "School-wide analytics and infrastructure management.", style: "node-br" },
  ];

  return (
    <div className="min-h-screen bg-[#0b1020] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-inter">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        /* AI VISUAL CSS from Landing Page */
        .ai-visual{
          position:relative; width:100%; aspect-ratio: 1/1; max-width: 500px; margin: 40px auto;
        }

        .ai-visual svg.lines{ position:absolute; inset:0; width:100%; height:100%; overflow:visible; }
        .ai-visual .flow-path{ fill:none; stroke-width: 1.4; stroke: url(#lineGrad); opacity:.55; }

        .ai-core{
          position:absolute; left:50%; top:50%; transform: translate(-50%,-50%);
          width: 132px; height:132px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          z-index: 5;
        }
        .ai-core-ring{
          position:absolute; inset:-14px; border-radius:50%;
          background: conic-gradient(from 0deg, #3ddcff, #4f8dff, #d9b46b, #3ddcff);
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px));
          mask: radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px));
          animation: spinSlow 12s linear infinite;
          opacity:.85;
        }
        @keyframes spinSlow{ to{ transform: rotate(360deg); } }
        
        .ai-core-glow{
          position:absolute; inset:-30px; border-radius:50%;
          background: radial-gradient(circle, rgba(61,220,255,0.35), transparent 70%);
          animation: pulseGlow 3.2s ease-in-out infinite;
        }
        @keyframes pulseGlow{ 0%,100%{ opacity:.5; transform:scale(.96); } 50%{ opacity:1; transform:scale(1.08); } }
        
        .ai-core img{ width: 78px; height:78px; border-radius:50%; position:relative; z-index:2; }

        .node-card{
          position:absolute; width: 178px;
          background: linear-gradient(160deg, rgba(22,29,46,0.88), rgba(14,20,40,0.82));
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 14px 16px;
          backdrop-filter: blur(10px);
          box-shadow: 0 30px 80px -24px rgba(0,0,0,0.65);
          animation: floatSlow 7s ease-in-out infinite;
          cursor: pointer;
          transition: transform 0.3s, border-color 0.3s;
        }
        .node-card:hover { transform: scale(1.05); }
        .node-tl{ top: 2%; left: -8%; animation-delay: 0s; }
        .node-tr{ top: 2%; right: -8%; animation-delay: 1.4s; }
        .node-bl{ bottom: 2%; left: -8%; animation-delay: .7s; }
        .node-br{ bottom: 2%; right: -8%; animation-delay: 2.1s; }
        @keyframes floatSlow{ 0%,100%{ transform: translateY(0); } 50%{ transform: translateY(-9px); } }

        .node-head{ display:flex; align-items:center; gap:9px; }
        .node-dot{ width:8px; height:8px; border-radius:50%; flex-shrink:0; }
        .node-title{ font-size: 13.5px; font-weight:700; color: #ffffff; }
        .node-sub{ margin-top:8px; font-size:11px; color: #aab4c8; font-family:'JetBrains Mono',monospace; }
      `}} />
      
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#3ddcff]/10 to-[#8b7cff]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-[800px]">
        
        {!selectedRole ? (
          <div className="animate-fade-in-up flex flex-col items-center">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold mb-4">Welcome to School OS</h1>
              <p className="text-[#aab4c8] text-lg max-w-[500px] mx-auto">
                Select your node in the ecosystem to access your personalized workspace.
              </p>
            </div>

            {/* AI Ecosystem Visual from Landing Page */}
            <div className="ai-visual">
              <svg className="lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3ddcff" />
                    <stop offset="100%" stopColor="#8b7cff" />
                  </linearGradient>
                </defs>
                <path className="flow-path" d="M50,50 Q34,32 18,20" />
                <path className="flow-path" d="M50,50 Q66,32 82,20" />
                <path className="flow-path" d="M50,50 Q34,68 18,80" />
                <path className="flow-path" d="M50,50 Q66,68 82,80" />
              </svg>

              {roles.map((role) => (
                <div 
                  key={role.id} 
                  className={`node-card ${role.style}`}
                  onClick={() => setSelectedRole(role.id)}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = role.color}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                >
                  <div className="node-head">
                    <span className="node-dot" style={{ backgroundColor: role.color, boxShadow: `0 0 8px 2px ${role.color}80` }}></span>
                    <span className="node-title">{role.name} Workspace</span>
                  </div>
                  <div className="node-sub">Select to authenticate</div>
                </div>
              ))}

              <div className="ai-core">
                <div className="ai-core-glow"></div>
                <div className="ai-core-ring"></div>
                <Logo className="relative z-[2] w-[78px] h-[78px] drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]" />
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-[#aab4c8]">
              <Link href="/" className="hover:text-white transition-colors underline underline-offset-4">
                Return to home page
              </Link>
            </div>
          </div>
        ) : (
          <div className="max-w-[400px] mx-auto bg-[#121826]/90 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedRole(null)}
              className="text-[#aab4c8] hover:text-white flex items-center gap-2 text-sm mb-8 transition-colors"
            >
              <ArrowLeft size={16} /> Back to ecosystem
            </button>

            {roles.filter(r => r.id === selectedRole).map(role => (
              <div key={role.id} className="text-center mb-8">
                <div className="w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-4" style={{ backgroundColor: `${role.color}15` }}>
                  <role.icon size={40} color={role.color} />
                </div>
                <h2 className="text-2xl font-bold text-white">{role.name} Login</h2>
                <p className="text-[#aab4c8] text-sm mt-2">Enter your credentials to continue</p>
              </div>
            ))}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Email / Username</label>
                <input 
                  type="text" 
                  required
                  defaultValue="demo@schoolos.com"
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#4f8dff] focus:ring-1 focus:ring-[#4f8dff] transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                <input 
                  type="password" 
                  required
                  defaultValue="••••••••"
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#4f8dff] focus:ring-1 focus:ring-[#4f8dff] transition-all"
                />
              </div>
              
              <div className="flex justify-between items-center py-2">
                <label className="flex items-center gap-2 text-sm text-[#aab4c8] cursor-pointer">
                  <input type="checkbox" className="rounded bg-black/30 border-white/10 text-[#4f8dff] focus:ring-0" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-[#4f8dff] hover:underline">Forgot password?</a>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-4"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>
          </div>
        )}
        
      </div>
    </div>
  );
}
