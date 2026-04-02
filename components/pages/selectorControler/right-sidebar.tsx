import React from 'react'
import { CheckCircle, Eye, Lock, Zap } from 'lucide-react'

export default function RightSidebar() {
  return (
    <div className="w-80 bg-white border-l border-slate-180 flex flex-col overflow-y-auto">


      {/* Content */}
      <div className="p-2">

        {/* Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 ">

          {/* Title */}
          <p className="text-gray-400 text-sm font-semibold tracking-wide mb-4">
            AUTH STATUS
          </p>

          {/* Selector ID */}
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-gray-600 font-medium">Selector ID</span>
            <span className="bg-gray-200 px-2 py-1 rounded text-gray-800 font-semibold">
              #S-7729-AX
            </span>
          </div>

          {/* IP Address */}
          <div className="flex justify-between mb-4 text-sm">
            <span className="text-gray-600 font-medium">IP Address</span>
            <span className="text-gray-800 font-semibold">
              192.168.1.104
            </span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
            <Lock size={16} />
            <span>FULL CLEARANCE GRANTED</span>
          </div>
        </div>

      </div>


      {/* Completed Allocations Card */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6 rounded-2xl m-4 flex-1">
        <div className="flex items-center gap-2 mb-6">
          <CheckCircle size={20} className="text-teal-400" />
          <h3 className="text-lg font-bold">Completed Allocations</h3>
        </div>

        <div className="space-y-4">
          {/* Morning Shift */}
          <div className="bg-slate-700 bg-opacity-50 rounded-lg p-4">
            <p className="text-xs uppercase tracking-wide font-semibold text-slate-300 mb-2">Morning Shift</p>
            <h4 className="font-semibold text-white mb-2">Anatomy & Physiology</h4>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Set Red Allocated</span>
              <span className="bg-teal-600 text-teal-100 px-2 py-1 rounded text-xs font-semibold">VERIFIED</span>
            </div>
          </div>

          {/* Noon Shift */}
          <div className="bg-slate-700 bg-opacity-50 rounded-lg p-4">
            <p className="text-xs uppercase tracking-wide font-semibold text-slate-300 mb-2">Noon Shift</p>
            <h4 className="font-semibold text-white mb-2">Biochemistry & Genetics</h4>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Set Yellow Allocated</span>
              <span className="bg-teal-600 text-teal-100 px-2 py-1 rounded text-xs font-semibold">VERIFIED</span>
            </div>
          </div>

          {/* Evening Shift */}
          <div className="bg-slate-700 bg-opacity-50 rounded-lg p-4">
            <p className="text-xs uppercase tracking-wide font-semibold text-slate-300 mb-2">Evening Shift</p>
            <h4 className="font-semibold text-white mb-2">Medical Ethics</h4>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Set Orange Allocated</span>
              <span className="bg-teal-600 text-teal-100 px-2 py-1 rounded text-xs font-semibold">VERIFIED</span>
            </div>
          </div>
        </div>

        <button className="w-full mt-6 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition text-sm">
          <Eye size={16} />
          VIEW FULL AUDIT LOG
        </button>
      </div>

      {/* Protocol Note Card */}
      <div className="p-4 mx-4 mb-4">
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-4 text-white">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 200'%3E%3Crect fill='%231a2942' width='400' height='200'/%3E%3Ccircle cx='50' cy='50' r='3' fill='%2310b981' opacity='0.6'/%3E%3Ccircle cx='350' cy='150' r='2' fill='%2310b981' opacity='0.4'/%3E%3Cline x1='50' y1='50' x2='100' y2='80' stroke='%2310b981' stroke-width='0.5' opacity='0.3'/%3E%3Cline x1='100' y1='80' x2='150' y2='60' stroke='%2310b981' stroke-width='0.5' opacity='0.3'/%3E%3Cline x1='150' y1='60' x2='200' y2='100' stroke='%2310b981' stroke-width='0.5' opacity='0.3'/%3E%3Cline x1='200' y1='100' x2='250' y2='70' stroke='%2310b981' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E"
            alt="Network visualization"
            className="w-full h-24 rounded mb-3 object-cover"
          />
          <h4 className="font-semibold text-sm mb-2">Protocol Note</h4>
          <p className="text-xs text-slate-300 leading-relaxed">The randomization engine uses a quantum-resistant seed generator. Ensure all selection parameters are verified before clicking the allocation trigger.</p>
        </div>
      </div>
    </div>
  )
}
