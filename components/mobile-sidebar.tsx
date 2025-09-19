"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, Home, Users, BarChart3, Calendar, GraduationCap, Music, Mic, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Members", href: "/members", icon: Users },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Students", href: "/students", icon: GraduationCap },
  { name: "Training", href: "/training", icon: BookOpen },
  { name: "Classes", href: "/classes", icon: BookOpen },
  { name: "Music Ministry", href: "/music-ministry", icon: Music },
  { name: "Auditions", href: "/auditions", icon: Mic },
]

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VC</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Victory Cubao</h2>
              <p className="text-xs text-gray-500">Church Management</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs text-gray-500">Victory Cubao Church</p>
            <p className="text-xs text-gray-400">© 2024 All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  )
}
