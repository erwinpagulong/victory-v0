"use client"

import { useState } from "react"
import { Home, Users, Calendar, BarChart3, User } from "lucide-react"

const footerNavigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Members", href: "/members", icon: Users },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Profile", href: "/profile", icon: User },
]

// Utility function to combine class names (replaces cn from shadcn)
function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Link component (simplified version for demo)
function Link({ href, children, className, ...props }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault() // Prevent actual navigation in demo
      }}
      className={className}
      {...props}
    >
      {children}
    </a>
  )
}

export function MobileFooter({ currentPath, onNavigate }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-30">
      <nav className="flex items-center justify-around py-2">
        {footerNavigation.map((item) => {
          const isActive = currentPath === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => onNavigate(item.href)}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors min-w-0",
                isActive ? "text-purple-600" : "text-gray-600",
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium truncate">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

// Demo component to show the footer in action
export default function MobileFooterDemo() {
  const [currentPath, setCurrentPath] = useState("/")

  const handleNavigate = (href) => {
    setCurrentPath(href)
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Victory Cubao</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="p-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {footerNavigation.find(item => item.href === currentPath)?.name || "Home"}
          </h2>
          <p className="text-gray-600 mb-6">
            This is a demo of the mobile footer navigation component built with Next.js 15 and Tailwind CSS.
            The bottom navigation bar is fixed and will highlight the active page.
          </p>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Page:</h3>
            <p className="text-purple-600 font-medium">
              {footerNavigation.find(item => item.href === currentPath)?.name}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Features:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Fixed bottom navigation for mobile devices</li>
              <li>• 5 main navigation items with icons</li>
              <li>• Active state highlighting in purple</li>
              <li>• Responsive design (hidden on desktop)</li>
              <li>• Truncated text labels for smaller screens</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Navigation Items:</h3>
            <div className="grid grid-cols-2 gap-3">
              {footerNavigation.map((item) => (
                <div
                  key={item.name}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors cursor-pointer",
                    currentPath === item.href 
                      ? "bg-purple-50 border-purple-200 text-purple-600" 
                      : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                  )}
                  onClick={() => handleNavigate(item.href)}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add some content to demonstrate scrolling */}
          <div className="mt-8 space-y-4">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <h4 className="font-medium text-gray-900 mb-2">Content Block {i + 1}</h4>
                <p className="text-gray-600 text-sm">
                  This is sample content to demonstrate how the fixed footer navigation 
                  works with scrollable content. The footer stays at the bottom of the screen.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <MobileFooter 
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />
    </div>
  )
}