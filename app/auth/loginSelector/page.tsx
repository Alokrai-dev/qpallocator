"use client";

import { useState } from "react";
import {
  Shield,
  ChevronDown,
  User,
  Lock,
  ArrowRight,
  ClipboardList,
  Fingerprint,
  CheckCircle2,
} from "lucide-react";

const examinations = [
  "UPSC Civil Services 2025",
  "SSC CGL 2025",
  "GATE 2025",
  "CAT 2025",
  "JEE Advanced 2025",
];

export default function LoginPage() {
  const [selectedExam, setSelectedExam] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 p-2">
      {/* Top bar */}


      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400" />

            <div className="px-10 py-10">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-[28px] font-bold text-[#0b1628] tracking-tight mb-2">
                  Selector Portal
                </h1>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Please enter your credentials to access the allocation engine.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                {/* Examination Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-2">
                    Select Examination
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all text-sm text-left focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                    >
                      <div className="flex items-center gap-2.5">
                        <ClipboardList className="w-4 h-4 text-slate-400 shrink-0" />
                        <span
                          className={
                            selectedExam ? "text-slate-700" : "text-slate-400"
                          }
                        >
                          {selectedExam || "Choose an examination..."}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-slate-200 shadow-xl z-10 overflow-hidden">
                        {examinations.map((exam) => (
                          <button
                            key={exam}
                            type="button"
                            onClick={() => {
                              setSelectedExam(exam);
                              setDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors flex items-center gap-2.5 border-b border-slate-100 last:border-0"
                          >
                            {selectedExam === exam && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            )}
                            <span
                              className={selectedExam === exam ? "ml-0" : "ml-6"}
                            >
                              {exam}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Username */}
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-2">
                    Username
                  </label>
                  <div
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border bg-slate-50 transition-all ${
                      focused === "username"
                        ? "border-emerald-400 ring-2 ring-emerald-400/20 bg-white"
                        : "border-slate-200"
                    }`}
                  >
                    <User
                      className={`w-4 h-4 shrink-0 transition-colors ${focused === "username" ? "text-emerald-500" : "text-slate-400"}`}
                    />
                    <input
                      type="text"
                      placeholder="e.g. selector_admin_01"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      onFocus={() => setFocused("username")}
                      onBlur={() => setFocused(null)}
                      className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                      Password
                    </label>
                    <button
                      type="button"
                      className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase hover:text-emerald-600 transition-colors"
                    >
                      Forgot Access?
                    </button>
                  </div>
                  <div
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border bg-slate-50 transition-all ${
                      focused === "password"
                        ? "border-emerald-400 ring-2 ring-emerald-400/20 bg-white"
                        : "border-slate-200"
                    }`}
                  >
                    <Lock
                      className={`w-4 h-4 shrink-0 transition-colors ${focused === "password" ? "text-emerald-500" : "text-slate-400"}`}
                    />
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocused("password")}
                      onBlur={() => setFocused(null)}
                      className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0b1628] text-white text-sm font-semibold tracking-wide hover:bg-[#162035] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2 group"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Authenticating...
                    </>
                  ) : (
                    <>
                      Secure Login
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-400 italic">
                  Only one authorized selector permitted per examination session.
                </p>
              </form>


            </div>
          </div>
        </div>
      </main>
    </div>
  );
}