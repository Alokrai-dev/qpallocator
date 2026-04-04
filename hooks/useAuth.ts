"use client";

import { useState, useEffect } from "react";

export interface UserProfile {
  id: number;
  username: string;
  type: string;
  examId?: number;
  examName?: string;
  mobileNumber?: string;
}

export function useAuth() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        // Token might be invalid or expired
        localStorage.removeItem("token");
        setUser(null);
      }
    } catch (err) {
      console.error("Profile fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        await fetch("http://localhost:3000/api/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (err) {
        console.error("Logout error:", err);
      }
    }
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/auth/loginSelector";
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return { user, loading, logout, fetchProfile };
}
