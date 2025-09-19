"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Users, Calendar, BarChart3, GraduationCap, Music, Mic, User, BookOpen } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Members", href: "/members", icon: Users },  
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Students", href: "/students", icon: GraduationCap },
  { name: "Training", href: "/training", icon: GraduationCap },
  { name: "Classes", href: "/classes", icon: BookOpen },
  { name: "Music Ministry", href: "/music-ministry", icon: Music },
  { name: "Auditions", href: "/auditions", icon: Mic },
]

interface SidebarProps {
  onItemClick?: () => void
}

export function Sidebar({ onItemClick }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r border-[#e4e4e4]">
      {/* Logo */}
      <div className="flex h-16 items-center px-6 border-b border-[#e4e4e4]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#9e56ff] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="font-semibold text-gray-900">Victory Cubao</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onItemClick}
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                isActive ? "bg-[#9e56ff] text-white" : "text-gray-700 hover:bg-[#f4f6fa] hover:text-gray-900",
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-[#e4e4e4]">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 bg-[#e4e4e4] rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
            <p className="text-xs text-gray-500 truncate">admin@victorycubao.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
