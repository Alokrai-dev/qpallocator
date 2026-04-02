import React from 'react'
import { Search, Bell, User, Lock } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Left side - Title and navigation */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Paper Allocator Pro</h2>
        </div>

        {/* Right side - Search, notifications, profile */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          {/* <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg">
            <Search size={16} className="text-slate-500" />
            <input
              type="text"
              placeholder="Search parameters..."
              className="bg-transparent text-sm text-slate-700 placeholder-slate-500 focus:outline-none w-40"
            />
          </div> */}

          {/* Notification Bell */}
          {/* <button className="text-slate-600 hover:text-slate-900 transition">
            <Bell size={20} />
          </button> */}

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
      </div>
    </header>
  )
}
