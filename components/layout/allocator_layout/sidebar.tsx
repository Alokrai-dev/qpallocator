import React from 'react'
import { LayoutGrid, Settings, LogOut, Menu, Bell, Search, User, LogIn, AlertTriangle, CheckSquare, Shield } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className="w-48 bg-gradient-to-b from-slate-900 to-slate-800 text-white h-screen flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-lg font-bold">Exam Curator</h1>
        <p className="text-xs text-slate-400 mt-1">ENTERPRISE ADMIN</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-6 px-4">
        <div className="space-y-2">
          {/* Dashboard */}
          <Link href="/randomization_in_progress" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-slate-700 cursor-pointer transition">
            <LayoutGrid size={18} />
            <span className="text-sm">Randomization In Progress</span>
          </Link>


          {/* Selector Controls - Active */}
          <Link href="/selectorControl" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-teal-600 text-white cursor-pointer transition">
            <LayoutGrid size={18} />
            <span className="text-sm">Selector Controls</span>
          </Link>

        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-slate-700 p-4 space-y-2">

        {/* Logout */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-slate-700 cursor-pointer transition">
          <LogOut size={18} />
          <span className="text-sm">Logout</span>
        </div>
      </div>
    </div>
  )
}
