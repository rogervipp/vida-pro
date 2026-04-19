"use client";

import DashboardLayout from "./components/DashboardLayout";
import { 
  Sparkles, 
  Zap, 
  Flame, 
  Target, 
  Wallet, 
  Dumbbell, 
  Salad 
} from "lucide-react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        
        {/* Saudação */}
        <div className="flex flex-col gap-4 pt-4">
          <h1 className="text-2xl font-bold text-white">Boa tarde, Rogério! 👋</h1>
          <div className="flex items-center gap-3">
            <div className="bg-blue-600/20 border border-blue-500/30 px-3 py-1.5 rounded-full text-[10px] font-bold text-blue-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> NÍVEL 5
            </div>
            <div className="bg-orange-600/20 border border-orange-500/30 px-3 py-1.5 rounded-full text-[10px] font-bold text-orange-400 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5" /> 12 DIAS
            </div>
          </div>
        </div>

        {/* XP */}
        <div className="bg-[#09090b] border border-zinc-800 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
            <span>Progresso de XP</span>
            <span className="text-blue-500">85/100 XP</span>
          </div>
          <div className="w-full bg-zinc-900 rounded-full h-2 border border-zinc-800 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full w-[85%]" />
          </div>
        </div>

        {/* Cards de Status */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#09090b] border border-zinc-800 p-4 rounded-2xl">
            <Target className="text-purple-400 w-4 h-4 mb-2"/>
            <div className="text-[9px] font-bold uppercase text-zinc-600">Hábitos</div>
            <div className="text-lg font-bold text-white">6 / 8</div>
          </div>
          <div className="bg-[#09090b] border border-zinc-800 p-4 rounded-2xl">
            <Wallet className="text-green-400 w-4 h-4 mb-2"/>
            <div className="text-[9px] font-bold uppercase text-zinc-600">Finanças</div>
            <div className="text-lg font-bold text-white">R$ 1.250</div>
          </div>
        </div>

        {/* Jarvis */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5">
          <p className="text-[10px] font-bold text-blue-500 uppercase mb-1">Jarvis IA</p>
          <p className="text-sm text-zinc-300">Você está quase batendo seu recorde, Rogério! Mantenha a constância.</p>
        </div>

      </div>
    </DashboardLayout>
  );
}
