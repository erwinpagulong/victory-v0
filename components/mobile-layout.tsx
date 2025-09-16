"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Home, Users, BookOpen, Calendar, Settings, ChevronLeft, Music, Megaphone } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

interface MobileLayoutProps {
  children: React.ReactNode
  title: string
  showBack?: boolean
  backHref?: string
}

export function MobileLayout({ children, title, showBack = false, backHref = "/" }: MobileLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()

  const renderHeader = () => (
    <div className="flex items-center justify-between p-4 bg-card border-b sticky top-0 z-10">
      <div className="flex items-center gap-3">
        {showBack && (
          <Button variant="ghost" size="sm" onClick={() => router.push(backHref)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
        <h1 className="text-lg font-semibold text-balance">{title}</h1>
      </div>
      <Button variant="ghost" size="sm">
        <Settings className="h-4 w-4" />
      </Button>
    </div>
  )

  const renderBottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t p-2 z-20">
      <div className="flex justify-around">
        <Button
          variant={pathname === "/" ? "default" : "ghost"}
          size="sm"
          onClick={() => router.push("/")}
          className="flex flex-col gap-1 h-auto py-2"
        >
          <Home className="h-4 w-4" />
          <span className="text-xs">Home</span>
        </Button>
        <Button
          variant={pathname.startsWith("/members") ? "default" : "ghost"}
          size="sm"
          onClick={() => router.push("/members")}
          className="flex flex-col gap-1 h-auto py-2"
        >
          <Users className="h-4 w-4" />
          <span className="text-xs">Members</span>
        </Button>
        <Button
          variant={pathname.startsWith("/classes") ? "default" : "ghost"}
          size="sm"
          onClick={() => router.push("/classes")}
          className="flex flex-col gap-1 h-auto py-2"
        >
          <BookOpen className="h-4 w-4" />
          <span className="text-xs">Classes</span>
        </Button>
        <Button
          variant={pathname.startsWith("/events") ? "default" : "ghost"}
          size="sm"
          onClick={() => router.push("/events")}
          className="flex flex-col gap-1 h-auto py-2"
        >
          <Calendar className="h-4 w-4" />
          <span className="text-xs">Events</span>
        </Button>
        <Button
          variant={
            pathname.startsWith("/music") || pathname.startsWith("/ministry") || pathname.startsWith("/announcements")
              ? "default"
              : "ghost"
          }
          size="sm"
          onClick={() => {
            // Cycle through additional pages
            if (pathname.startsWith("/music")) {
              router.push("/ministry")
            } else if (pathname.startsWith("/ministry")) {
              router.push("/announcements")
            } else {
              router.push("/music")
            }
          }}
          className="flex flex-col gap-1 h-auto py-2"
        >
          {pathname.startsWith("/music") ? (
            <Music className="h-4 w-4" />
          ) : pathname.startsWith("/announcements") ? (
            <Megaphone className="h-4 w-4" />
          ) : (
            <Users className="h-4 w-4" />
          )}
          <span className="text-xs">
            {pathname.startsWith("/music") ? "Music" : pathname.startsWith("/announcements") ? "News" : "Ministry"}
          </span>
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {renderHeader()}
      <main className="pb-20">{children}</main>
      {renderBottomNav()}
    </div>
  )
}
