"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Target, Scroll } from "lucide-react";
import AiChatPanel from "./AiChatPanel";
import Logo from "@/components/Logo";

export default function AnimeLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/student/dashboard", icon: <Home size={24} /> },
    { name: "Quizzes", href: "/student/quizzes", icon: <Target size={24} /> },
    { name: "Study Guides", href: "/student/study-guides", icon: <Scroll size={24} /> },
    { name: "Materials", href: "/student/materials", icon: <BookOpen size={24} /> },
  ];

  return (
    <div className="flex h-screen bg-[#0A1628] text-white overflow-hidden font-poppins">
      
      {/* SIDEBAR */}
      <aside className="w-[100px] border-r-4 border-black bg-[#1E3A5F] flex flex-col items-center py-8 z-10 shadow-[4px_0_0_#000]">
        
        {/* Uzumaki Swirl Logo */}
        <div className="mb-12 w-[60px] h-[60px] bg-[#F97316] rounded-full border-4 border-black flex items-center justify-center shadow-[4px_4px_0_#000]">
          <span className="text-3xl font-black text-black">🌀</span>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-6 w-full px-4">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}
                className={`relative flex items-center justify-center w-full aspect-square rounded-2xl border-4 border-black transition-transform ${
                  active 
                  ? "bg-[#F97316] text-black shadow-[4px_4px_0_#000]" 
                  : "bg-[#0A1628] text-white hover:bg-[#1E3A5F] hover:shadow-[4px_4px_0_#000] hover:-translate-y-1"
                }`}
                title={item.name}
              >
                {item.icon}
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto">
          {/* School OS Hexagon Logo */}
          <Link href="/" title="Back to Site">
            <Logo className="w-[50px] h-[50px] hover:-translate-y-1 transition-transform cursor-pointer" />
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 h-full overflow-y-auto relative">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{
          backgroundImage: "radial-gradient(#1E3A5F 2px, transparent 2px)",
          backgroundSize: "30px 30px",
          opacity: 0.3
        }} />

        <div className="relative z-10 p-8 max-w-5xl mx-auto min-h-full">
          {children}
        </div>
        
        {/* Kakashi AI Assistant */}
        <AiChatPanel />
      </main>

    </div>
  );
}
