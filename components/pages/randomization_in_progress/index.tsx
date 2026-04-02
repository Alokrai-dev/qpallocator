"use client";

import {
  List,
  Fingerprint,
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
} from "lucide-react";

export default function RandomizationInProgress() {
  return (
    <div className="flex-1 overflow-y-auto from-slate-900 to-slate-800">


      <main className="flex flex-col h-screen">

        <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-200/15 shadow-sm flex justify-between items-center px-8 h-20">
          <div>
            <h1 className="font-headline text-xl font-black text-[#002045] dark:text-white tracking-tight">Spring 2024 - National Medical Entrance</h1>
            <div className="flex items-center gap-3 mt-0.5">
              <span className="text-xs font-semibold text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">science</span> Anatomy &amp; Physiology
              </span>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span className="text-xs font-semibold text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">schedule</span> Shift: Morning (09:00 - 12:00)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 border bg-slate-200 bg-surface-container-high text-outline font-bold text-xs rounded-xl cursor-not-allowed uppercase tracking-wider" >
              Accept &amp; Publish Result
            </button>
            <button className="px-6 py-2.5 bg-error bg-red-400 text-white font-bold text-xs rounded-xl hover:bg-error/90 transition-all uppercase tracking-wider shadow-lg shadow-error/20 flex items-center gap-2">

              Stop Process
            </button>
            {/* User Profile */}
            <div className="flex items-center gap-2 pl-6 border-l border-slate-200">
              <div className="text-right">
                <p className="text-xs font-semibold text-slate-900">Selector_Alpha_01</p>
                <p className="text-xs text-teal-600">Session Authorized</p>
              </div>
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-semibold">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 flex gap-8">

          <div className="flex-1 space-y-8">

            <div className="bg-[#fffbeb] border-l-4 border-amber-500 p-6 rounded-xl shadow-sm flex items-start gap-5">

              <div>
                <h3 className="font-headline font-bold text-amber-900 text-lg">Inconclusive Result Detected</h3>
                <p className="text-amber-800/80 font-medium leading-relaxed mt-1">The first 5 iterations did not produce a unique winner across the distributed selection nodes. Automatic <span className="font-bold underline decoration-amber-300">High-Entropy Tie-Breaker</span> has been triggered to ensure cryptographic finality.</p>
              </div>
            </div>
            {/* <!-- Iterations Grid (Bento Style) --> */}
            <section>
              <div className="flex items-end justify-between mb-6">
                <h2 className="font-headline text-2xl font-extrabold text-primary flex items-center gap-2">
                  Randomization Iterations
                  <span className="text-sm font-bold bg-primary-container text-[#68dba9] px-2.5 py-0.5 rounded-full uppercase tracking-tighter">Phase 02</span>
                </h2>
                <div className="text-xs font-bold text-on-surface-variant flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-lg">
                  <span className="material-symbols-outlined text-[16px]">sync_alt</span> Node: US-EAST-CORE-01
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* <!-- Iteration 01-05 (Completed) --> */}
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-slate-200/50 flex flex-col justify-between group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Iteration</span>
                      <div className="text-2xl font-black text-primary">01</div>
                    </div>
                    <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-on-surface">Selected: Set 03</div>
                    <div className="text-[10px] font-medium text-on-surface-variant">TIMESTAMP: 09:14:22.003</div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-slate-200/50 flex flex-col justify-between group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Iteration</span>
                      <div className="text-2xl font-black text-primary">02</div>
                    </div>
                    <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-on-surface">Selected: Set 07</div>
                    <div className="text-[10px] font-medium text-on-surface-variant">TIMESTAMP: 09:14:22.450</div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-slate-200/50 flex flex-col justify-between group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Iteration</span>
                      <div className="text-2xl font-black text-primary">03</div>
                    </div>
                    <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-on-surface">Selected: Set 03</div>
                    <div className="text-[10px] font-medium text-on-surface-variant">TIMESTAMP: 09:14:22.881</div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-slate-200/50 flex flex-col justify-between group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Iteration</span>
                      <div className="text-2xl font-black text-primary">04</div>
                    </div>
                    <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-on-surface">Selected: Set 07</div>
                    <div className="text-[10px] font-medium text-on-surface-variant">TIMESTAMP: 09:14:23.110</div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-slate-200/50 flex flex-col justify-between group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Iteration</span>
                      <div className="text-2xl font-black text-primary">05</div>
                    </div>
                    <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-on-surface">Selected: Set 03</div>
                    <div className="text-[10px] font-medium text-on-surface-variant">TIMESTAMP: 09:14:23.504</div>
                  </div>
                </div>
                {/* <!-- Iteration 06 (The Tie-Breaker - Active State) --> */}
                <div className="relative overflow-hidden bg-primary p-5 rounded-2xl shadow-xl shadow-primary/20 flex flex-col justify-between border border-[#68dba9]/30">
                  <div className="absolute inset-0 shimmer animate-[shimmer_2s_infinite]"></div>
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div>
                      <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Iteration (Tie-Breaker)</span>
                      <div className="text-2xl font-black text-white">06</div>
                    </div>
                    <div className="w-6 h-6 border-2 border-[#68dba9] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="space-y-1 relative z-10">
                    <div className="text-sm font-bold text-[#68dba9] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#68dba9] animate-pulse"></span>
                      IN PROGRESS
                    </div>
                    <div className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Calculating Cryptographic Hash...</div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- Data Analysis (Visual Placeholder) --> */}
            <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/15">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-headline text-lg font-bold text-primary">Live Distribution Analysis</h4>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white rounded-lg text-[10px] font-bold shadow-sm border border-slate-100">SET 03: 60% FREQ</span>
                  <span className="px-3 py-1 bg-white rounded-lg text-[10px] font-bold shadow-sm border border-slate-100">SET 07: 40% FREQ</span>
                </div>
              </div>
              <div className="h-12 bg-white rounded-xl overflow-hidden flex shadow-inner border border-slate-200">
                <div className="h-full bg-primary-container w-[60%] flex items-center px-4 transition-all duration-1000">
                  <span className="text-[10px] font-black text-white tracking-widest">SET 03 (DOMINANT)</span>
                </div>
                <div className="h-full bg-secondary-fixed-dim w-[40%] flex items-center justify-end px-4 transition-all duration-1000">
                  <span className="text-[10px] font-black text-primary tracking-widest text-right">SET 07 (CONTENDER)</span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Right: System Info --> */}
          <aside className="w-80 space-y-6">
            {/* <!-- Security Integrity Card --> */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary-fixed-dim/10 rounded-full blur-2xl"></div>
              <div className="flex flex-col items-center text-center">
                <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">Security Integrity</span>
                <div className="text-5xl font-black text-primary tracking-tighter mb-1">99.9<span className="text-2xl">%</span></div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#39b282]">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  Quantum Resistance Active
                </div>
              </div>
              <div className="mt-8 space-y-3 pt-6 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-on-surface-variant uppercase">Entropy Source</span>
                  <span className="text-[11px] font-bold text-primary">TRNG Cluster 4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-on-surface-variant uppercase">Encryption</span>
                  <span className="text-[11px] font-bold text-primary">AES-GCM-256</span>
                </div>
              </div>
            </div>
            {/* <!-- System Telemetry --> */}
            <div className="bg-primary text-white rounded-3xl p-6 shadow-xl">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-6">System Telemetry</h4>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#68dba9] shadow-[0_0_10px_#68dba9]"></div>
                  <div className="flex-1">
                    <div className="text-xs font-bold">Mainframe Connectivity</div>
                    <div className="text-[10px] text-white/40 font-medium">LATENCY: 12ms (OPTIMAL)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#68dba9] shadow-[0_0_10px_#68dba9]"></div>
                  <div className="flex-1">
                    <div className="text-xs font-bold">Public Key Exchange</div>
                    <div className="text-[10px] text-white/40 font-medium">ROTATING IN: 14:02s</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#68dba9] animate-pulse"></div>
                  <div className="flex-1">
                    <div className="text-xs font-bold">Input Distribution</div>
                    <div className="text-[10px] text-white/40 font-medium">QUEUED FOR ITERATION 06</div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 py-3 bg-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 transition-all border border-white/5">
                View Node Manifest
              </button>
            </div>
            {/* <!-- Security Badge (Floating Utility) --> */}
            <div className="bg-tertiary-container/10 border border-tertiary-container/20 rounded-2xl p-4 flex items-center gap-4">
              <span className="material-symbols-outlined text-on-tertiary-container">lock</span>
              <div>
                <div className="text-[10px] font-black text-on-tertiary-container uppercase tracking-tight">Verified Data Channel</div>
                <div className="text-[9px] text-on-tertiary-container opacity-70 leading-none mt-1">Hash: d7a8...91f4</div>
              </div>
            </div>
          </aside>
        </div>
        {/* <!-- Footer / Audit Bar --> */}
        <footer className="h-10 bg-primary border-t border-white/5 flex items-center justify-between px-8 text-[10px] font-black tracking-widest text-white/40">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#68dba9]"></span>
              ENCRYPTED SESSION ACTIVE
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#68dba9]"></span>
              LIVE AUDIT TRAIL
            </div>
          </div>
          <div>
            SENTINEL KERNEL V4.2.0-STABLE
          </div>
        </footer>
      </main>


    </div>
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