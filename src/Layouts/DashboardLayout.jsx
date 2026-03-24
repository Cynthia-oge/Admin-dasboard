import React from 'react'
import Sidebar from '../components/Sidebar/AppSidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <SidebarInset>
        {/* Top Navbar */}
        <div className='bg-amber-200'>
          <Navbar />
        </div>
        
        
        {/* Page Content (React Router renders child routes here) */}
        <main className="p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout