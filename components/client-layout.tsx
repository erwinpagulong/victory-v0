"use client"

import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { MobileSidebar } from "@/components/mobile-sidebar"
import { MobileFooter } from "@/components/mobile-footer"
import { Suspense, useState } from "react"

export function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMobileSidebarOpen(true)
  }

  const handleCloseMobileSidebar = () => {
    setIsMobileSidebarOpen(false)
  }

  return (
    <div className="flex h-screen bg-[#f8f8f8]">
      <Sidebar />
      <MobileSidebar isOpen={isMobileSidebarOpen} onClose={handleCloseMobileSidebar} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <Header onMenuClick={handleMenuClick} />
        </Suspense>
        <main className="flex-1 overflow-auto pb-20 lg:pb-0">{children}</main>
      </div>

      <MobileFooter />
    </div>
  )
}
