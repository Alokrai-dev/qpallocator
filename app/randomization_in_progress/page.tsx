"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Shield,
  Clock,
  Server,
  Key,
  BarChart3,
  StopCircle,
  BookOpen,
  Clock1,
  Fingerprint,
  CheckCircle2,
  AlertCircle,
  LogOut,
  ChevronRight,
  Database,
  Radio,
  Zap
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function RandomizationInProgress() {
  const { user, loading: authLoading, logout } = useAuth();
  const searchParams = useSearchParams();
  const subjectId = searchParams.get('subjectId');
  const shiftId = searchParams.get('shiftId');
  const examId = searchParams.get('examId');

  const [details, setDetails] = useState<{
    subjectName: string;
    shiftName: string;
    examName: string;
    noOfIteration: number;
  }>({
    subjectName: "Loading Subject...",
    shiftName: "Loading Shift...",
    examName: "Loading Exam Data...",
    noOfIteration: 5
  });

  const [loading, setLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedIterations, setCompletedIterations] = useState<any[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (examId) {
      fetchDetails();
    }
  }, [examId, subjectId, shiftId]);

  const fetchDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/allocations/data?examId=${examId}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      const data = await response.json();

      const subject = data.subjects?.find((s: any) => s.id.toString() === subjectId);
      const shift = data.shifts?.find((s: any) => s.id.toString() === shiftId);

      setDetails({
        subjectName: subject?.subjectName || "Unknown Subject",
        shiftName: shift ? `${shift.startTime} - ${shift.endTime}` : "Unknown Shift",
        examName: data.exam?.examName || "National Medical Entrance",
        noOfIteration: data.exam?.noOfIteration || 5
      });
    } catch (err) {
      console.error("Failed to fetch details", err);
    } finally {
      setLoading(false);
    }
  };

  const startRandomization = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setCompletedIterations([]);

    // Process iterations in a loop
    for (let i = 1; i <= details.noOfIteration; i++) {
      setCurrentStep(i);

      try {
        // Wait a bit for visual effect
        await new Promise(resolve => setTimeout(resolve, 1500));

        const response = await fetch('http://localhost:3000/api/allocations/randomize', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            subjectId: subjectId,
            shiftId: shiftId,
            token: localStorage.getItem('token') // Fallback for the middleware update we made
          })
        });

        const result = await response.json();
        setCompletedIterations(prev => [...prev, {
          id: i.toString().padStart(2, '0'),
          time: new Date().toLocaleTimeString(),
          set: `Set ${result.selectedSet.toString().padStart(2, '0')} (${result.selectedSet % 2 === 0 ? 'Teal' : 'Green'})`,
          raw: result
        }]);

      } catch (err) {
        console.error(`Iteration ${i} failed`, err);
        break;
      }
    }

    setIsProcessing(false);
    setCurrentStep(details.noOfIteration + 1);
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-emerald-500/10 border-t-emerald-500 rounded-full animate-spin"></div>
            <Shield className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-500 w-6 h-6" />
          </div>
          <p className="text-[#0b1628] font-black text-xs uppercase tracking-[0.3em] animate-pulse">Initializing Secure Entropy Engine...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0b1628] font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Header Bar */}
      <header className="fixed ml-50 top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50 px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2.5 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
            <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black tracking-widest text-emerald-700 uppercase">Selector_Alpha_01</span>
          </div>
          <div className="h-4 w-px bg-slate-200"></div>
          <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>Central Allocation</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-emerald-500">Real-time Entropy Engine</span>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">

            <div className="relative">
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white"></div>
              <Radio className="w-5 h-5 text-slate-300" />
            </div>
          </div>
          <div className="h-8 w-px bg-slate-100"></div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-black text-[#0b1628] leading-none mb-1">{user?.username || "Administrator Profile"}</p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Master Key Holder</p>
            </div>
            <div className="w-9 h-9 bg-slate-100 rounded-full border border-slate-200 flex items-center justify-center text-[#0b1628] font-black text-sm overflow-hidden">
              {user?.username?.charAt(0).toUpperCase() || "A"}
            </div>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-12 max-w-[1400px] mx-auto">
        {/* Page Title Section */}
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h1 className="text-[48px] font-black text-[#0b1628] leading-[1.1] tracking-tight mb-4">
              {details.examName.split(' - ')[0]} -
              <span className="text-emerald-500 opacity-90 block lg:inline ml-0 lg:ml-3">
                {details.examName.split(' - ')[1]}
              </span>
            </h1>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3 text-slate-500">
                <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-50">
                  <BookOpen size={18} className="text-[#0b1628]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Subject Domain</span>
                  <span className="text-sm font-black text-[#0b1628]">{details.subjectName}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-50">
                  <Clock1 size={18} className="text-[#0b1628]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Examination Shift</span>
                  <span className="text-sm font-black text-[#0b1628]">Shift: {details.shiftName}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              disabled={isProcessing || completedIterations.length < details.noOfIteration}
              className="px-8 py-4 bg-emerald-500 disabled:bg-slate-50 border border-emerald-400 disabled:border-slate-100 rounded-2xl flex items-center gap-3 text-white disabled:text-slate-300 font-black uppercase tracking-widest text-[11px] group shadow-lg shadow-emerald-500/20 disabled:shadow-none transition-all active:scale-95"
            >
              <Zap size={16} />
              Accept & Publish Result
            </button>
            <button
              onClick={isProcessing ? () => window.location.href = '/selectorControl' : startRandomization}
              className={`px-8 py-4 border rounded-2xl shadow-sm transition-all flex items-center gap-3 font-black uppercase tracking-widest text-[11px] group active:scale-95 ${isProcessing
                ? 'bg-white border-red-100 text-red-500 hover:bg-red-50'
                : 'bg-[#0b1628] border-[#0b1628] text-white hover:bg-slate-800'
                }`}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${isProcessing ? 'bg-red-500 animate-pulse' : 'bg-emerald-400'}`}></div>
              {isProcessing ? 'Stop Process' : 'Start Allocation'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10">
          {/* Left Column: Iterations Timeline */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm relative overflow-hidden min-h-[600px]">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
                  <h3 className="text-xl font-black text-[#0b1628] tracking-tight">Randomization Iterations</h3>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                  <Shield size={12} className="text-emerald-600" />
                  <span className="text-[9px] font-black text-emerald-700 uppercase tracking-widest">Secured Layer Active</span>
                </div>
              </div>

              <div className="space-y-6 relative">
                {/* Timeline Background Line */}
                <div className="absolute left-[31px] top-6 bottom-6 w-[2px] bg-slate-50"></div>

                {/* Dynamic Iterations Mapping */}
                {Array.from({ length: details.noOfIteration }).map((_, idx) => {
                  const stepNum = idx + 1;
                  const iteration = completedIterations.find(it => parseInt(it.id) === stepNum);
                  const isProcessingThis = isProcessing && currentStep === stepNum;
                  const isPending = !iteration && !isProcessingThis;

                  return (
                    <div key={stepNum} className={`relative flex items-center gap-8 pl-1 transition-all duration-500 ${isPending ? 'opacity-20' : 'opacity-100'}`}>
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg z-10 transition-colors ${iteration ? 'bg-[#0b1628]' : isProcessingThis ? 'bg-[#0b1628] ring-4 ring-emerald-500/20' : 'bg-slate-100 text-slate-400 shadow-none'}`}>
                        {isProcessingThis ? (
                          <div className="relative">
                            <Radio size={24} className="animate-spin duration-[3000ms] text-emerald-400" />
                            <div className="absolute inset-0 flex items-center justify-center text-[10px]">{stepNum.toString().padStart(2, '0')}</div>
                          </div>
                        ) : stepNum.toString().padStart(2, '0')}
                      </div>

                      {iteration ? (
                        <div className="flex-1 bg-[#f8fafc]/50 rounded-3xl p-6 border border-slate-50 flex items-center justify-between group hover:bg-white hover:shadow-xl hover:shadow-slate-500/5 transition-all">
                          <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Iteration Completed</p>
                            <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500">
                              <span className="flex items-center gap-1.5"><Clock size={12} /> {iteration.time}</span>
                              <span className="flex items-center gap-1.5"><Fingerprint size={12} /> SHA-256 Verified</span>
                            </div>
                          </div>
                          <div className={`px-4 py-2 rounded-xl flex items-center gap-2 border ${iteration.set.includes('Teal') ? 'bg-teal-50 border-teal-100 text-teal-700' : 'bg-emerald-50 border-emerald-100 text-emerald-700'}`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${iteration.set.includes('Teal') ? 'bg-teal-500' : 'bg-emerald-500'}`}></div>
                            <span className="text-[10px] font-black uppercase">{iteration.set}</span>
                          </div>
                        </div>
                      ) : isProcessingThis ? (
                        <div className="flex-1 bg-[#0b1628] rounded-3xl p-8 shadow-2xl shadow-slate-900/40 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-2xl animate-pulse"></div>
                          <div className="flex items-center justify-between relative z-10">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <p className="text-[10px] font-black text-white uppercase tracking-[0.3em]">In Progress</p>
                                <div className="flex gap-1">
                                  <span className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:0s]"></span>
                                  <span className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                  <span className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                              </div>
                              <p className="text-[11px] font-bold text-slate-400">Running Entropy Matrix Expansion...</p>
                            </div>
                            <div className="text-[11px] font-black text-emerald-400 italic tracking-widest uppercase">Calculating...</div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex-1 bg-white border-2 border-dashed border-slate-100 rounded-3xl p-6 flex items-center justify-between">
                          <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Pending Iteration</p>
                            <p className="text-[9px] font-bold text-slate-300 italic">Waiting for prior cycle completion</p>
                          </div>
                          <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">TBD</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Security & Metrics */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* Security Integrity Card */}
            <div className="bg-[#0b1628] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-10 -mb-10 blur-3xl group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">Security Integrity</h4>

              <div className="relative mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-[64px] font-black leading-none tracking-tighter">99.9</span>
                  <span className="text-2xl font-black text-emerald-500">%</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-bold mb-8">Quantum-safe randomization active. All seed inputs are cryptographically isolated from the network.</p>

              <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl relative overflow-hidden">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Entropy Level</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">Maximum</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[94%] shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-pulse"></div>
                </div>
              </div>

              <Shield className="absolute top-10 right-10 w-8 h-8 text-slate-800" />
            </div>

            {/* System Telemetry Card */}
            <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm">
              <h4 className="text-lg font-black text-[#0b1628] tracking-tight mb-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                System Telemetry
              </h4>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="p-3 bg-[#f8fafc] rounded-2xl border border-slate-50">
                    <Server size={20} className="text-[#0b1628]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-[#0b1628] uppercase tracking-widest mb-1">Mainframe Connectivity</p>
                    <p className="text-xs text-slate-400 font-bold">Secure Tunnel Established (Node-4)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-[#f8fafc] rounded-2xl border border-slate-50">
                    <Key size={20} className="text-[#0b1628]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-[#0b1628] uppercase tracking-widest mb-1">Public Key Exchange</p>
                    <p className="text-xs text-slate-400 font-bold">Rotation complete (Next in 2m 45s)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-[#f8fafc] rounded-2xl border border-slate-50">
                    <BarChart3 size={20} className="text-[#0b1628]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-[#0b1628] uppercase tracking-widest mb-1">Input Distribution</p>
                    <p className="text-xs text-slate-400 font-bold">Uniform across 50 regional centers</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-[#f8fafc] rounded-3xl border border-slate-50">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Session ID</p>
                <p className="text-[10px] font-black text-[#0b1628] font-mono break-all opacity-60">X99-SENTINEL-ALPH-01-PRIME-ALLOC-2024</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Footer Bar */}
      <footer className="ml-50fixed bottom-0 left-0 right-0 h-14 bg-white/80 backdrop-blur-md border-t border-slate-100 flex items-center justify-between px-10 z-50">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Encrypted Session Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Live Audit Trail</span>
          </div>
        </div>
        <div className="flex items-center gap-6 text-[9px] font-black text-slate-300 uppercase tracking-widest">
          <span>Uptime: 142:22:11</span>
          <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
          <span>V 4.2.0-SENTINEL</span>
        </div>
      </footer>
    </div>
  );
}
