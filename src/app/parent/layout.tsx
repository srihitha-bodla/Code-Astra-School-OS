"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LineChart, Bell, MessageSquare, LogOut } from "lucide-react";
import Logo from "@/components/Logo";

export default function ParentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/parent/dashboard", icon: <Home size={24} /> },
    { name: "Progress Reports", href: "/parent/reports", icon: <LineChart size={24} /> },
    { name: "Notifications", href: "/parent/notifications", icon: <Bell size={24} /> },
    { name: "Messages", href: "/parent/messages", icon: <MessageSquare size={24} /> },
  ];

  return (
    <div className="flex h-screen bg-[#0b1020] text-white overflow-hidden font-inter">
      
      {/* SIDEBAR */}
      <aside className="w-[80px] bg-[#121826] border-r border-white/10 flex flex-col items-center py-8 z-10 shadow-2xl">
        
        {/* Logo */}
        <Link href="/" className="mb-12 hover:-translate-y-1 transition-transform">
          <Logo className="w-10 h-10 shadow-[0_0_15px_rgba(217,180,107,0.4)]" />
        </Link>

        {/* Nav Links */}
        <nav className="flex flex-col gap-6 w-full px-4">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link key={item.name} href={item.href}
                className={`relative flex items-center justify-center w-full aspect-square rounded-xl transition-all ${
                  active 
                  ? "bg-[#d9b46b] text-black shadow-[0_0_10px_rgba(217,180,107,0.3)]" 
                  : "bg-transparent text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
                title={item.name}
              >
                {item.icon}
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto mb-8">
          <Link href="/" title="Back to Site" className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-10 h-10 rounded-xl hover:bg-white/5">
            <LogOut size={24} />
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 h-full overflow-y-auto relative">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d9b46b] via-[#0b1020] to-[#0b1020]" />
        
        <div className="relative z-10 p-10 max-w-6xl mx-auto min-h-full">
          {children}
        </div>
      </main>

    </div>
  );
}
