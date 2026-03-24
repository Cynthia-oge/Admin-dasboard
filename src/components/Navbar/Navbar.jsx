import React from 'react'
import { Search, Bell, ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-8 py-5 border-b bg-white">
      {/* Left side - Page Title */}
      <h1 className="text-xl font-bold text-[20px]">Dashboard</h1>

      {/* Right side - Search, Notifications, Profile */}
      <div className="flex items-center gap-4">
        
        {/* search input */}
        <Input className='w-80 border-none'></Input>
        {/* Search Icon Button */}
        <Button variant="ghost" size="icon">
          <Search className="w-5 h-5 text-gray-600" />
        </Button>

        {/* Notification Bell */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          {/* Red notification dot */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        {/* User Profile Dropdown */}
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-2 px-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Aniehe Cynthia</span>
            <ChevronDown size={32} />
            </Button>
          </DropdownMenuTrigger>
  
          
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  )
}

export default Navbar