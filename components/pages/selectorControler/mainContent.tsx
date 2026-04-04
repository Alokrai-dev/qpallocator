"use client"
import React, { useState, useEffect } from 'react'
import { Lock, ChevronDown, Zap, Clock, FileText, Shield, Database, Radio } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

interface Subject {
  id: number;
  subjectName: string;
}

interface Shift {
  id: number;
  startTime: string;
  endTime: string;
}

export default function MainContent() {
  const { user, loading: authLoading } = useAuth();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [loading, setLoading] = useState(true);
  const [isRandomizing, setIsRandomizing] = useState(false);
  
  // Selection state
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [selectedShift, setSelectedShift] = useState<number | null>(null);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (user && user.examId) {
      fetchExamData();
    }
  }, [user]);

  const fetchExamData = async () => {
    if (!user || !user.examId) return;
    
    try {
      const response = await fetch(`http://localhost:3000/api/allocations/data?examId=${user.examId}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      const data = await response.json();
      setSubjects(data.subjects || []);
      setShifts(data.shifts || []);
      if (data.subjects?.length > 0) setSelectedSubject(data.subjects[0].id.toString());
      if (data.shifts?.length > 0) setSelectedShift(data.shifts[0].id);
    } catch (err) {
      console.error("Failed to fetch exam data", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRandomize = async () => {
    if (!selectedSubject || !selectedShift) return;
    
    setIsRandomizing(true);
    try {
      const response = await fetch('http://localhost:3000/api/allocations/randomize', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          subjectId: selectedSubject,
          shiftId: selectedShift
        })
      });
      const data = await response.json();
      setResult(data);
      // Trigger a refresh of the history in the sidebar (we might need a global state or event bus for this, 
      // but for now let's just show the result locally)
    } catch (err) {
      console.error("Randomization failed", err);
    } finally {
      setIsRandomizing(false);
    }
  };

  if (authLoading || loading) return (
    <div className="flex-1 bg-slate-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Initializing Terminal...</p>
      </div>
    </div>
  );

  return (
    <div className="flex-1 bg-[#f8fafc] p-10">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-[10px] font-black px-3 py-1.5 rounded-lg mb-8 border border-emerald-100/50 shadow-sm shadow-emerald-500/5 tracking-[0.15em] uppercase">
        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
        LOCKED ALLOCATION NODE
      </div>

      {/* Title Section */}
      <div className="mb-10">
        <h1 className="text-[42px] font-black text-[#0b1628] leading-[1.1] tracking-tighter">
          {user?.examName?.split(' - ')[0] || "Spring 2024"} - 
          <span className="text-emerald-500"> {user?.examName?.split(' - ')[1] || "National Medical Entrance"}</span>
        </h1>
        <p className="text-slate-400 mt-4 text-sm leading-relaxed max-w-2xl font-medium">Authorized selector terminal for the National Certification Board. Follow the three-step sequence to finalize the paper set randomization process {user?.examName ? `for ${user.examName}` : ""}.</p>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 gap-6 mb-10 max-w-3xl">
        {/* Step 1 - Subject Domain */}
        <div className="bg-white rounded-[24px] p-7 border border-slate-100 shadow-sm relative overflow-hidden group hover:border-emerald-200 transition-all">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-[#0b1628] rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg shadow-slate-900/10">01</div>
            <div className="flex-1">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-2">Subject Domain</h3>
              <div className="relative">
                <select 
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 text-slate-900 font-bold text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                >
                  {subjects.map(sub => (
                    <option key={sub.id} value={sub.id}>{sub.subjectName}</option>
                  ))}
                </select>
                <ChevronDown size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 - Examination Shift */}
        <div className="bg-white rounded-[24px] p-7 border border-slate-100 shadow-sm relative overflow-hidden group hover:border-emerald-200 transition-all">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-[#0b1628] rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg shadow-slate-900/10">02</div>
            <div className="flex-1">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-3">Examination Shift</h3>
              <div className="flex gap-3">
                {shifts.map(shift => (
                  <button 
                    key={shift.id}
                    onClick={() => setSelectedShift(shift.id)}
                    className={`flex-1 font-bold py-3.5 rounded-xl text-xs transition-all border ${
                      selectedShift === shift.id 
                      ? 'bg-[#0b1628] text-white border-[#0b1628] shadow-lg shadow-slate-900/20' 
                      : 'bg-slate-50 text-slate-400 border-slate-100 hover:border-emerald-200 hover:text-emerald-600'
                    }`}
                  >
                    {shift.startTime.substring(0, 5)} hrs
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 - Final Action */}
        <div className="bg-white rounded-[24px] p-7 border border-slate-100 shadow-sm relative overflow-hidden group hover:border-emerald-200 transition-all">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-[#0b1628] rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg shadow-slate-900/10">03</div>
            <div className="flex-1">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-3">Final Action</h3>
              <button 
                onClick={handleRandomize}
                disabled={isRandomizing}
                className="w-full bg-gradient-to-r from-[#0b1628] to-[#1e293b] text-white font-black py-5 rounded-[20px] flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-slate-900/20 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed group/btn"
              >
                {isRandomizing ? (
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Zap size={20} className="text-emerald-400 group-hover/btn:scale-125 transition-transform" />
                    <span className="tracking-widest uppercase text-sm">Randomize and Allocate</span>
                  </>
                )}
              </button>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Shield size={12} className="text-slate-300" />
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Immutable Audit Trail active</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Question Papers */}
      <div className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-sm max-w-3xl">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-50 rounded-xl">
              <FileText size={22} className="text-emerald-600" />
            </div>
            <h3 className="text-xl font-black text-[#0b1628] tracking-tight">Available Question Paper Sets</h3>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">10 Sets Validated</span>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {[
            { label: 'BLUE', color: 'bg-blue-500', icon: null },
            { label: 'LOCKED', color: 'bg-slate-200', icon: <Lock size={20} className="text-slate-400" /> },
            { label: 'GREEN', color: 'bg-emerald-500', icon: null },
            { label: 'USED', color: 'bg-slate-200', icon: <Clock size={20} className="text-slate-400" /> },
            { label: 'PURPLE', color: 'bg-purple-600', icon: null },
            { label: 'PREVIEW', color: 'bg-slate-200', icon: <Shield size={20} className="text-slate-400" /> },
            { label: 'TEAL', color: 'bg-teal-500', icon: null },
            { label: 'PINK', color: 'bg-pink-500', icon: null },
            { label: 'AMBER', color: 'bg-amber-500', icon: null },
            { label: 'INDIGO', color: 'bg-indigo-600', icon: null },
          ].map((paper, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group">
              <div className={`w-16 h-16 ${paper.color} rounded-2xl shadow-lg transition-all group-hover:scale-105 group-hover:-translate-y-1 flex items-center justify-center cursor-pointer overflow-hidden relative`}>
                {paper.icon ? paper.icon : (
                  <span className="text-white font-black text-sm relative z-10">{paper.label[0]}</span>
                )}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className={`text-[10px] font-black tracking-widest uppercase transition-colors ${paper.icon ? 'text-slate-300' : 'text-slate-400 group-hover:text-slate-600'}`}>
                {paper.icon ? 'Restricted' : `Set ${String(idx + 1).padStart(2, '0')}`}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* System Monitor Bar */}
      <div className="mt-8 max-w-3xl flex items-center justify-between bg-white px-6 py-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-slate-50 rounded-lg">
            <Radio size={16} className="text-emerald-500 animate-pulse" />
          </div>
          <div>
            <h4 className="text-[11px] font-black text-[#0b1628] uppercase tracking-widest leading-none">System Integrity Monitor</h4>
            <p className="text-[10px] text-slate-400 font-bold mt-1">Continuous credential validation active</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-lg">
            <Database size={12} className="text-emerald-600" />
            <span className="text-[10px] font-black text-emerald-700 tracking-widest uppercase">+ DB Latency: 24ms</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">
            <Radio size={12} className="text-slate-400" />
            <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Synced</span>
          </div>
        </div>
      </div>
    </div>
  )
}
