"use client";

import {
  List,
  Fingerprint,
  Clock1,
  BookOpen,
  RefreshCw,
  Server,
  Key,
  BarChart3,
  Shield,
  Clock,
  Upload,
  StopCircle,
  Stethoscope,
  ChevronRight,
  User,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function RandomizationInProgress() {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 font-medium animate-pulse text-sm tracking-widest uppercase">Initializing Secure Session...</p>
        </div>
      </div>
    );
  }

  // If not logged in, the hook handles redirection or we can show a fallback
  if (!user) return null;

  return (
    <div className="bg-surface overflow-y-auto text-on-surface min-h-screen flex flex-col">

      <header className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md text-primary dark:text-slate-100 font-manrope headline-md tracking-tight  top-0 z-50 border-b border-slate-200/15 shadow-sm flex justify-between items-center w-full px-8 py-3 fixed">
        <div className="flex items-center gap-6">
          <span className="text-xl font-black text-[#002045] dark:text-white uppercase tracking-tight">ExamCore Sentinel</span>
          <div className="h-6 w-px bg-slate-200 mx-2"></div>
          <div className="flex items-center gap-2 px-3 py-1 bg-tertiary-container/10 rounded-full">
            <span className="material-symbols-outlined text-on-tertiary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="text-[10px] font-bold text-on-tertiary-container uppercase tracking-wider">{user.username}</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {/* User Profile */}
          <div className="flex items-center gap-4 pl-6 border-l border-slate-200">
            <div className="text-right">
              <p className="text-xs font-semibold text-slate-900">{user.username}</p>
              <p className="text-[10px] text-teal-600 font-bold uppercase tracking-tight">
                {user.type === 'admin' ? 'Root Administrator' : 'Authorized Selector'}
              </p>
            </div>
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold">
              {user.username.charAt(0).toUpperCase()}
            </div>
            
            <button 
              onClick={logout}
              className="p-2.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all group"
              title="Terminate Secure Session"
            >
              <LogOut size={18} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </header >
      <div className="flex flex-1 overflow-y-auto mt-20 mb-15">
        {/* <!-- Main Content Area --> */}
        <main className="flex-1 p-8 bg-surface">
          {/* <!-- Header Section --> */}
          <div className="mb-12 flex justify-between items-end">
            <div>
              <nav className="flex items-center gap-2 text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4">
                <span>Central Allocation</span>
                <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                <span className="text-primary">Real-time Entropy Engine</span>
              </nav>
              <h1 className="text-4xl font-extrabold text-primary mb-2 tracking-tight">
                {user.examName || "Spring 2024 - National Medical Entrance"}
              </h1>
              <div className="flex items-center gap-6 text-on-surface-variant">
                <div className="flex items-center gap-2"><BookOpen />
                  <span className="font-medium text-on-surface">Subject: <span className="font-bold">Anatomy &amp; Physiology</span></span>
                </div>
                <div className="h-4 w-px bg-outline-variant/30"></div>
                <div className="flex items-center gap-2"><Clock1 />

                  <span className="font-medium text-on-surface">Shift: <span className="font-bold">Morning (09:00 - 12:00)</span></span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-slate-100 text-slate-400 cursor-not-allowed px-6 py-3 rounded-xl font-bold flex items-center gap-2 border border-slate-200 opacity-60">
                <span>Accept &amp; Publish Result</span>
              </button>
              <button className="bg-white border border-error/20 text-red-500 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-error-container/20 transition-all shadow-sm active:scale-95">
                <StopCircle />  <span> Stop Process</span>
              </button>
            </div>
          </div>
          {/* <!-- Dashboard Grid --> */}
          <div className="grid grid-cols-12 gap-8">
            {/* <!-- Left: Status Monitor --> */}
            <div className="col-span-12 lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
                <div className="px-8 py-6 flex justify-between items-center border-b border-outline-variant/10">
                  <h3 className="headline-font text-xl font-bold text-primary flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">reorder</span>
                    Randomization Iterations
                  </h3>
                  <span className="text-[10px] font-bold px-3 py-1 bg-tertiary-container/10 text-on-tertiary-container rounded-full uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
                    Secured Layer active
                  </span>
                </div>
                <div className="p-8">
                  <div className="space-y-6 relative">
                    {/* <!-- Iteration 01 --> */}
                    <div className="relative flex items-center gap-6 progress-line-active">
                      <div className="w-12 h-12 flex items-center justify-center bg-primary text-white font-bold rounded-full z-10 shadow-md">
                        01
                      </div>
                      <div className="flex-1 flex items-center justify-between p-5 rounded-xl bg-surface-container-low border border-outline-variant/10">
                        <div>
                          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Iteration Completed</p>
                          <div className="flex items-center gap-3 text-[10px] text-on-surface-variant font-medium">
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">schedule</span> 10:15:22 AM</span>
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">fingerprint</span> SHA-256 Verified</span>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#68dba9]/10 text-on-tertiary-container rounded-lg font-bold text-xs border border-[#68dba9]/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#68dba9]"></span>
                          Set 03 (Green)
                        </div>
                      </div>
                    </div>
                    {/* <!-- Iteration 02 --> */}
                    <div className="relative flex items-center gap-6 progress-line-active">
                      <div className="w-12 h-12 flex items-center justify-center bg-primary text-white font-bold rounded-full z-10 shadow-md">
                        02
                      </div>
                      <div className="flex-1 flex items-center justify-between p-5 rounded-xl bg-surface-container-low border border-outline-variant/10">
                        <div>
                          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Iteration Completed</p>
                          <div className="flex items-center gap-3 text-[10px] text-on-surface-variant font-medium">
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">schedule</span> 10:15:25 AM</span>
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">fingerprint</span> SHA-256 Verified</span>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 text-teal-700 rounded-lg font-bold text-xs border border-teal-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                          Set 07 (Teal)
                        </div>
                      </div>
                    </div>
                    {/* <!-- Iteration 03 - In Progress --> */}
                    <div className="relative flex items-center gap-6">
                      <div className="w-12 h-12 flex items-center justify-center bg-primary text-white font-bold rounded-full z-10 shadow-md spin-slow ring-4 ring-primary-container/20">
                        <span className="material-symbols-outlined text-xl">sync</span>
                      </div>
                      <div className="flex-1 flex items-center justify-between p-5 rounded-xl bg-primary-container text-white shadow-lg ring-1 ring-primary/10">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                            In Progress
                            <span className="flex gap-0.5">
                              <span className="w-1 h-1 bg-white rounded-full animate-bounce"></span>
                              <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
                              <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
                            </span>
                          </p>
                          <p className="text-[10px] text-slate-300 font-medium">Running Entropy Matrix Expansion...</p>
                        </div>
                        <div className="px-3 py-1.5 bg-white/10 rounded-lg font-bold text-xs italic">
                          Calculating...
                        </div>
                      </div>
                    </div>
                    {/* <!-- Iteration 04 - Pending --> */}
                    <div className="relative flex items-center gap-6 opacity-40">
                      <div className="w-12 h-12 flex items-center justify-center bg-surface-container-highest text-on-surface-variant font-bold rounded-full z-10">
                        04
                      </div>
                      <div className="flex-1 flex items-center justify-between p-5 rounded-xl border border-dashed border-outline-variant">
                        <div>
                          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Pending Iteration</p>
                          <p className="text-[10px] text-on-surface-variant/60 font-medium italic">Waiting for prior cycle completion</p>
                        </div>
                        <div className="px-3 py-1.5 bg-outline-variant/10 text-on-surface-variant rounded-lg font-bold text-xs uppercase">
                          TBD
                        </div>
                      </div>
                    </div>
                    {/* <!-- Iteration 05 - Pending --> */}
                    <div className="relative flex items-center gap-6 opacity-40">
                      <div className="w-12 h-12 flex items-center justify-center bg-surface-container-highest text-on-surface-variant font-bold rounded-full z-10">
                        05
                      </div>
                      <div className="flex-1 flex items-center justify-between p-5 rounded-xl border border-dashed border-outline-variant">
                        <div>
                          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">Pending Iteration</p>
                          <p className="text-[10px] text-on-surface-variant/60 font-medium italic">Waiting for prior cycle completion</p>
                        </div>
                        <div className="px-3 py-1.5 bg-outline-variant/10 text-on-surface-variant rounded-lg font-bold text-xs uppercase">
                          TBD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Right: Meta Data & Health --> */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* <!-- Security Metric Card --> */}
              <div className="bg-primary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-on-primary-container mb-6">Security Integrity</h4>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black headline-font">99.9<span className="text-2xl text-tertiary-fixed-dim">%</span></span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">Quantum-safe randomization active. All seed inputs are cryptographically isolated from the network.</p>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-bold uppercase">
                      <span>Entropy Level</span>
                      <span className="text-tertiary-fixed-dim">Maximum</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary-fixed-dim w-[92%] shadow-[0_0_8px_rgba(104,219,169,0.5)]"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-12 -bottom-12 opacity-10">
                  <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                </div>
              </div>
              {/* <!-- Live Feed / System Health --> */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10">
                <h4 className="headline-font text-lg font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
                  System Telemetry
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container mt-1">dns</span>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase">Mainframe Connectivity</p>
                      <p className="text-xs text-on-surface-variant">Secure Tunnel Established (Node-4)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container mt-1">key</span>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase">Public Key Exchange</p>
                      <p className="text-xs text-on-surface-variant">Rotation complete (Next in 2m 45s)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container mt-1">analytics</span>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase">Input Distribution</p>
                      <p className="text-xs text-on-surface-variant">Uniform across 50 regional centers</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-outline-variant/15">
                  <div className="p-4 bg-surface-container-low rounded-xl">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Session ID</p>
                    <code className="text-[10px] font-mono text-primary break-all">X99-SENTINEL-ALPH-01-PRIME-ALLOC-2024</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* <!-- Security Status Bar --> */}
      <footer className="ml-50 fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-8 py-2 flex items-center justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim shadow-[0_0_4px_#68dba9]"></span> Encrypted Session Active</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim shadow-[0_0_4px_#68dba9]"></span> Live Audit Trail</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-on-surface-variant/70">
            <span>Uptime: 142:22:11</span>
            <div className="h-3 w-px bg-slate-300"></div>
            <span>V 4.2.0-SENTINEL</span>
          </div>
        </div>
      </footer>


    </div >
  );
}

/* Components */

function Iteration({
  id,
  time,
  set,
}: {
  id: string;
  time: string;
  set: string;
}) {
  return (
    <div className="flex items-center gap-6">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-900 text-white rounded-full">
        {id}
      </div>

      <div className="flex-1 flex justify-between p-5 rounded-xl bg-gray-50 border">
        <div>
          <p className="text-xs font-bold uppercase text-blue-900">
            Iteration Completed
          </p>

          <div className="flex gap-3 text-xs text-gray-500 mt-1">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {time}
            </span>

            <span className="flex items-center gap-1">
              <Fingerprint size={12} />
              SHA-256 Verified
            </span>
          </div>
        </div>

        <div className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-lg font-bold">
          {set}
        </div>
      </div>
    </div>
  );
}

function Pending({ id }: { id: string }) {
  return (
    <div className="flex items-center gap-6 opacity-40">
      <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
        {id}
      </div>

      <div className="flex-1 p-5 border border-dashed rounded-xl">
        <p className="text-xs uppercase">Pending Iteration</p>
      </div>
    </div>
  );
}

function Item({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-4">
      {icon}
      <div>
        <p className="text-xs font-bold uppercase text-blue-900">
          {title}
        </p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>

  );


}