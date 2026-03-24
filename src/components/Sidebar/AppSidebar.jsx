import React from 'react'
import Logo from '../../assets/icons/Exclude.svg?react'
import Dashboard from '../../assets/icons/dashboard.svg?react'
import Transactions from '../../assets/icons/Transactions.svg?react'
import Invoice from '../../assets/icons/invoice.svg?react'
import Mywallet from '../../assets/icons/mywallet.svg?react'
import Settings from '../../assets/icons/Settings.svg?react'
import Help from '../../assets/icons/Help.svg?react'
import Logout from '../../assets/icons/Logout.svg?react'
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarFooter, 
  SidebarContent, 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from '../ui/sidebar'

const AppSidebar = () => {
  return (
    <Sidebar>
      {/* TOP: Logo */}
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 pt-5 pl-5">
          <Logo className="w-8 h-8" />
          <span className="text-xl font-extrabold ">Maglo</span>
        </div>
      </SidebarHeader>

      {/* MIDDLE: Navigation */}
      <SidebarContent className='pl-4'>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Menu</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              
              <SidebarMenuItem className='my-3'>
                <SidebarMenuButton asChild>
                  <a href="/dashboard">
                    <Dashboard className="w-4 h-4" />
                    <span className='text-[17px]'>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className='mb-2'>
                <SidebarMenuButton asChild>
                  <a href="/transactions">
                    <Transactions className="w-4 h-4" />
                    <span className='text-[17px]'>Transactions</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className='mb-2'>
                <SidebarMenuButton asChild>
                  <a href="/invoice">
                    <Invoice className="w-4 h-4" />
                    <span className='text-[17px]'>Invoice</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className='mb-2'>
                <SidebarMenuButton asChild>
                  <a href="/wallet">
                    <Mywallet className="w-4 h-4" />
                    <span className='text-[17px]'>My Wallet</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem className='mb-2'>
                <SidebarMenuButton asChild>
                  <a href="/settings">
                    <Settings className="w-4 h-4" />
                    <span className='text-[17px]'>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* BOTTOM: Footer */}
      <SidebarFooter className='pl-5'>
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <a href="/help">
          <Help className="w-4 h-4" />
          <span className='text-[17px]'>Help</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>

    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <a href="/logout">
          <Logout className="w-4 h-4" />
          <span className='text-[17px]'>Logout</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>

  <p className="text-sm text-gray-500 px-2 mt-2">© 2024 Maglo</p>
</SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar