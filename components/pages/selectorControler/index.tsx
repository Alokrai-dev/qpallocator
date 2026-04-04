"use client"
import React, { useState, useEffect } from 'react'
import MainContent from './mainContent'
import RightSidebar from './right-sidebar'
import Header from '@/components/layout/allocator_layout/header'
import { useAuth } from '@/hooks/useAuth'

function SelectorController() {
  const { user } = useAuth();
  const [allExams, setAllExams] = useState<any[]>([]);
  const [activeExamId, setActiveExamId] = useState<number | null>(null);
  const [activeExamName, setActiveExamName] = useState<string>("");

  useEffect(() => {
    fetchAllExams();
    if (user && user.examId) {
      setActiveExamId(user.examId);
      setActiveExamName(user.examName || "");
    }
  }, [user]);

  const fetchAllExams = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/exams");
      const data = await response.json();
      setAllExams(data.exams || []);
    } catch (err) {
      console.error("Failed to fetch exams", err);
    }
  };

  return (
    <div className="flex flex-1">

      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <div className="flex flex-1">
          <MainContent 
            activeExamId={activeExamId} 
            activeExamName={activeExamName}
            allExams={allExams}
          />
          <RightSidebar 
            activeExamName={activeExamName}
            activeExamId={activeExamId}
          />
        </div>
      </div>

    </div>
  )
}

export default SelectorController