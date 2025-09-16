import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileLayout } from "@/components/mobile-layout"
import { Plus, Megaphone, Clock, Pin } from "lucide-react"
import Link from "next/link"

const announcements = [
  {
    id: "1",
    title: "Victory Weekend Service Update",
    content: "This Sunday's service will start at 10:00 AM. Please arrive early for fellowship time.",
    type: "service",
    priority: "high",
    date: "2024-01-12",
    author: "Pastor Mike",
  },
  {
    id: "2",
    title: "Youth Night Registration Open",
    content: "Registration is now open for Youth Night on January 19th. Limited slots available!",
    type: "event",
    priority: "medium",
    date: "2024-01-10",
    author: "Peter Reyes",
  },
  {
    id: "3",
    title: "Victory Group Leaders Meeting",
    content: "All Victory Group leaders are invited to attend the monthly meeting on January 16th at 7:00 PM.",
    type: "meeting",
    priority: "medium",
    date: "2024-01-08",
    author: "John Dela Cruz",
  },
]

export default function AnnouncementsPage() {
  return (
    <MobileLayout title="Announcements" showBack backHref="/">
      <div className="p-4 space-y-4">
        {/* Header with Add Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Church Announcements</h2>
          <Link href="/announcements/create">
            <Button>
              <Plus className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Announcements List */}
        <div className="space-y-3">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      announcement.priority === "high"
                        ? "bg-destructive/10"
                        : announcement.priority === "medium"
                          ? "bg-primary/10"
                          : "bg-muted"
                    }`}
                  >
                    {announcement.priority === "high" ? (
                      <Pin className="h-5 w-5 text-destructive" />
                    ) : (
                      <Megaphone className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium">{announcement.title}</h3>
                      <Badge
                        variant={
                          announcement.priority === "high"
                            ? "destructive"
                            : announcement.priority === "medium"
                              ? "default"
                              : "outline"
                        }
                        className="text-xs ml-2"
                      >
                        {announcement.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{announcement.content}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{new Date(announcement.date).toLocaleDateString()}</span>
                      </div>
                      <span>By {announcement.author}</span>
                      <Badge variant="outline" className="text-xs">
                        {announcement.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Announcement Button */}
        <div className="mt-6">
          <Link href="/announcements/create">
            <Button className="w-full" size="lg">
              <Plus className="h-4 w-4 mr-2" />
              Create Announcement
            </Button>
          </Link>
        </div>
      </div>
    </MobileLayout>
  )
}
