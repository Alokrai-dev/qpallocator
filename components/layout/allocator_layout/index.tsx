import Sidebar from '@/components/layout/allocator_layout/sidebar'
import Header from '@/components/layout/allocator_layout/header'
import RightSidebar from '@/components/pages/selectorControler/right-sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Layout */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        {/* <Header /> */}

        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {children}
          {/* <RightSidebar /> */}
        </div>
      </div>
    </div>
  )
}
