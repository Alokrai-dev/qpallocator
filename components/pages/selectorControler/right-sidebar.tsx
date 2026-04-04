"use client"
import React, { useState, useEffect } from 'react'
import { CheckCircle, Eye, Lock, Zap, Shield, History, Info } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

interface HistoryItem {
  id: number;
  iterationCount: number;
  selectedSet: number;
  ts: string;
  subjectName: string;
  shiftStartTime: string;
}

interface RightSidebarProps {
  activeExamName: string;
  activeExamId: number | null;
}

export default function RightSidebar({ activeExamName, activeExamId }: RightSidebarProps) {
  const { user, loading } = useAuth();
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    fetchHistory();
    // Poll for updates every 10 seconds or use a socket for a real implementation
    const interval = setInterval(fetchHistory, 10000);
    return () => clearInterval(interval);
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/allocations/history', {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      const data = await response.json();
      setHistory(data.history || []);
    } catch (err) {
      console.error("Failed to fetch history", err);
    }
  };

  const getSetColor = (setNum: number) => {
    const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Teal', 'Pink', 'Amber', 'Indigo'];
    return colors[(setNum - 1) % colors.length];
  };

  if (loading || !user) return <div className="w-80 bg-white border-l border-slate-100 flex flex-col animate-pulse p-6 gap-6">
    <div className="h-32 bg-slate-50 rounded-2xl"></div>
    <div className="h-64 bg-slate-50 rounded-2xl"></div>
  </div>;

  return (
    <div className="w-80 bg-white border-l border-slate-100 flex flex-col">
      {/* Active Session Card */}
      <div className="p-6 pb-0">
        <div className="bg-emerald-50 rounded-[28px] p-6 border border-emerald-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full -mr-12 -mt-12 blur-xl"></div>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <p className="text-[10px] font-black tracking-[0.2em] text-emerald-700 uppercase">Live Node Active</p>
          </div>

          <h3 className="text-sm font-black text-[#0b1628] uppercase tracking-tight leading-tight mb-2">
            {activeExamName || "No Session Selected"}
          </h3>

          <div className="flex items-center gap-2">
            <div className="px-2 py-0.5 bg-white rounded-md border border-emerald-100 text-[10px] font-bold text-emerald-600">
              ID: {activeExamId || 'N/A'}
            </div>
            <div className="text-[10px] font-bold text-slate-400">
              Protocol v2.4
            </div>
          </div>
        </div>
      </div>

      {/* Auth Status Section */}
      <div className="p-6">
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm p-6 group hover:shadow-md transition-all">
          <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 mb-5 uppercase">Auth Status</p>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">Selector ID</span>
              <span className="bg-[#0b1628] text-white px-2.5 py-1 rounded-md text-[10px] font-black tracking-widest border border-slate-800">
                {user.username}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">IP Address</span>
              <span className="text-[11px] font-black text-[#0b1628] font-mono">192.168.1.104</span>
            </div>

            <div className="pt-2 border-t border-slate-50">
              <div className="flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest leading-none">
                <Shield size={14} className="animate-pulse" />
                <span>Full Clearance Granted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Completed Allocations Section */}
      <div className="px-6 pb-6 flex flex-col">
        <div className="bg-[#0b1628] rounded-[32px] p-6 flex flex-col shadow-xl shadow-slate-900/20 relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-2 bg-emerald-500/10 rounded-xl">
              <CheckCircle size={18} className="text-emerald-400" />
            </div>
            <h3 className="text-sm font-black text-white uppercase tracking-widest">Completed Allocations</h3>
          </div>

          <div className="space-y-3 flex-1 pr-1 custom-scrollbar relative z-10">
            {history.length === 0 ? (
              <div className="py-10 text-center">
                <History size={32} className="text-slate-700 mx-auto mb-3 opacity-20" />
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">No recent protocols</p>
              </div>
            ) : (
              history.map((item) => (
                <div key={item.id} className="bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 hover:border-white/10 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">
                      {item.shiftStartTime.substring(0, 5)} Shift
                    </p>
                    <div className="flex items-center gap-1 bg-emerald-500/20 px-1.5 py-0.5 rounded text-emerald-400 text-[8px] font-black uppercase tracking-tighter">
                      <Lock size={8} />
                      Verified
                    </div>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-2 leading-tight group-hover:text-emerald-300 transition-colors">{item.subjectName}</h4>
                  <p className="text-[10px] text-slate-400 font-medium">
                    Set <span className="text-white font-bold">{getSetColor(item.selectedSet)}</span> Allocated
                  </p>
                </div>
              ))
            )}
          </div>

          <button className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white font-black py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all text-[10px] uppercase tracking-[0.2em] border border-white/5 relative z-10">
            <Eye size={14} />
            View Full Audit Log
          </button>
        </div>
      </div>

      {/* Protocol Note Section */}
      <div className="px-6 pb-6">
        <div className="bg-slate-50 rounded-[24px] p-5 border border-slate-100 flex items-start gap-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl mt-1">
            <Info size={16} />
          </div>
          <div>
            <h4 className="text-[11px] font-black text-[#0b1628] uppercase tracking-widest mb-1.5">Protocol Note</h4>
            <p className="text-[10px] text-slate-500 font-bold leading-relaxed">
              The randomization engine uses a quantum-resistant seed generator. Ensure all selection parameters are verified before clicking the allocation trigger.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
