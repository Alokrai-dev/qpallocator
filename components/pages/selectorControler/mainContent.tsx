import React from 'react'
import { Lock, ChevronDown, Zap, Clock, FileText } from 'lucide-react'
import Header from '@/components/layout/allocator_layout/header'

export default function MainContent() {
  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 p-8">
      {/* Status Badge */}
      <div className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
        <Lock size={12} className="inline mr-2" />
        LOCKED ALLOCATION NODE
      </div>

      {/* Title Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">Spring 2024 - <span className="text-blue-400">National Medical Entrance</span></h1>
        <p className="text-slate-600 mt-3 text-sm">Authorized selector terminal for the National Certification Board. Follow the three-step sequence to finalize the paper set randomization process.</p>
      </div>

      {/* Steps Section */}
      <div className="space-y-6 mb-8">
        {/* Step 1 - Subject Domain */}
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center text-white text-2xl font-bold">01</div>
            <div className="flex-1">
              <h3 className="text-xs uppercase tracking-wide font-semibold text-slate-600 mb-3">Subject Domain</h3>
              <div className="relative">
                <select className="w-full bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-slate-900 font-medium appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option>Anatomy & Physiology</option>
                  <option>Biochemistry</option>
                  <option>Pathology</option>
                </select>
                <ChevronDown size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-600 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 - Examination Shift */}
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center text-white text-2xl font-bold">02</div>
            <div className="flex-1">
              <h3 className="text-xs uppercase tracking-wide font-semibold text-slate-600 mb-3">Examination Shift</h3>
              <div className="flex gap-3">
                <button className="flex-1 bg-slate-900 text-white font-medium py-3 rounded-lg hover:bg-slate-800 transition">Morning (09:00)</button>
                <button className="flex-1 bg-blue-100 text-slate-900 font-medium py-3 rounded-lg hover:bg-blue-200 transition">Noon (13:00)</button>
                <button className="flex-1 bg-blue-100 text-slate-900 font-medium py-3 rounded-lg hover:bg-blue-200 transition">Evening (17:00)</button>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 - Final Action */}
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold">03</div>
            <div className="flex-1">
              <h3 className="text-xs uppercase tracking-wide font-semibold text-slate-600 mb-3">Final Action</h3>
              <p className="text-sm text-slate-600 mb-4">Execute the allocation protocol for the selected parameters.</p>
              <button className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-3 hover:from-slate-800 hover:to-slate-700 transition">
                <Zap size={20} />
                RANDOMIZE AND ALLOCATE
              </button>
              <p className="text-xs text-slate-500 mt-3 text-center">This action is irreversible and will be logged in the immutable audit trail.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Available Question Papers */}
      <div className="bg-white rounded-lg p-6 border border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <FileText size={20} className="text-slate-700" />
            <h3 className="text-lg font-semibold text-slate-900">Available Question Paper Sets</h3>
          </div>
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">10 SETS VALIDATED</span>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {/* Paper Sets */}
          {[
            { label: 'BLUE', color: 'bg-blue-500', set: 'Set 01' },
            { label: 'LOCKED', color: 'bg-slate-300', set: 'Set 02 (Restricted)' },
            { label: 'GREEN', color: 'bg-green-500', set: 'Set 03' },
            { label: 'USED', color: 'bg-slate-200', set: 'Set 04 (Used)' },
            { label: 'PURPLE', color: 'bg-purple-600', set: 'Set 05' },
            { label: 'PREVIEW', color: 'bg-slate-400', set: 'Set 06 (Preview)' },
            { label: 'TEAL', color: 'bg-teal-500', set: 'Set 07' },
            { label: 'PINK', color: 'bg-pink-500', set: 'Set 08' },
            { label: 'AMBER', color: 'bg-amber-500', set: 'Set 09' },
            { label: 'INDIGO', color: 'bg-indigo-600', set: 'Set 10' },
          ].map((paper, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <button className={`w-16 h-16 ${paper.color} rounded-lg text-white font-bold text-sm hover:opacity-90 transition flex items-center justify-center`}>
                {paper.label[0]}
              </button>
              <p className="text-xs text-slate-600 text-center">{paper.set}</p>
            </div>
          ))}
        </div>
      </div>

      {/* System Monitor */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 mt-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700">
            <Clock size={20} />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-slate-900">System Integrity Monitor</h4>
            <p className="text-sm text-slate-600 mt-1">Continuous validation of allocation logic and user credentials active.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
