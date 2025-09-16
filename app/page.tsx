import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileLayout } from "@/components/mobile-layout"
import { UserPlus, Plus, Music, Calendar, Users, BookOpen, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import { members, classes, events } from "@/lib/data"

export default function HomePage() {
  const upcomingEvents = events.slice(0, 3)
  const recentActivity = [
    {
      id: "1",
      type: "member",
      title: "New member added",
      description: "John Dela Cruz joined Victory Group",
      time: "2 hours ago",
      color: "bg-primary",
    },
    {
      id: "2",
      type: "event",
      title: "Event created",
      description: "Youth Night scheduled for Jan 19",
      time: "5 hours ago",
      color: "bg-secondary",
    },
    {
      id: "3",
      type: "class",
      title: "Class updated",
      description: "Victory Group time changed to 7:30 PM",
      time: "1 day ago",
      color: "bg-accent",
    },
  ]

  return (
    <MobileLayout title="Victory Cubao">
      <div className="p-4 space-y-6">
        {/* Welcome Card with Gradient */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground overflow-hidden relative">
          <CardContent className="p-6">
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-2">Welcome to Victory Cubao!</h2>
              <p className="text-primary-foreground/90 mb-4">Building a community of honor</p>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Sunday Service: 10:00 AM
              </Badge>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -right-8 -top-8 w-16 h-16 bg-white/5 rounded-full"></div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-5 w-5 text-primary mr-2" />
                <div className="text-2xl font-bold text-primary">{members.length}</div>
              </div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-5 w-5 text-secondary mr-2" />
                <div className="text-2xl font-bold text-secondary">{classes.length}</div>
              </div>
              <div className="text-sm text-muted-foreground">Victory Groups</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/members/create">
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <UserPlus className="h-4 w-4 mr-2" />
                Add New Member
              </Button>
            </Link>
            <Link href="/events/create">
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Create Event
              </Button>
            </Link>
            <Link href="/music">
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Music className="h-4 w-4 mr-2" />
                Music Team
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Upcoming Events
              </CardTitle>
              <Link href="/events">
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{event.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </p>
                  <Badge
                    variant={event.type === "service" ? "default" : event.type === "meeting" ? "secondary" : "outline"}
                    className="text-xs mt-1"
                  >
                    {event.type}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                <div className={`w-2 h-2 ${activity.color} rounded-full mt-2 flex-shrink-0`}></div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{activity.title}</div>
                  <div className="text-xs text-muted-foreground">{activity.description}</div>
                  <div className="text-xs text-muted-foreground mt-1">{activity.time}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  )
}
