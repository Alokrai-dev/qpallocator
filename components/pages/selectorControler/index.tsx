import React from 'react'
import MainContent from './mainContent'
import RightSidebar from './right-sidebar'
import Header from '@/components/layout/allocator_layout/header'

function SelectorController() {
  return (
    <div className="flex flex-1">

      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <div className="flex flex-1">
          <MainContent />
          <RightSidebar />
        </div>
      </div>

    </div>
  )
}

export default SelectorController