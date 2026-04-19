"use client";
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans">
      <div className="max-w-5xl mx-auto p-4 pb-24 md:p-8">
        {children}
      </div>
      
      {/* Menu Inferior Fixo */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#09090b] border-t border-zinc-800 p-4 flex justify-around items-center md:hidden z-50">
        <span className="text-xl">📊</span>
        <span className="text-xl">✅</span>
        <span className="text-xl">💰</span>
        <span className="text-xl">🤖</span>
      </nav>
    </div>
  );
}
