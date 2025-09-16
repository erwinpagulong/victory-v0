import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileLayout } from "@/components/mobile-layout"
import { Plus, ChevronRight, Calendar, Clock, MapPin, User } from "lucide-react"
import Link from "next/link"
import { events } from "@/lib/data"

export default function EventsPage() {
  const upcomingEvents = events.filter((event) => new Date(event.date) >= new Date())
  const pastEvents = events.filter((event) => new Date(event.date) < new Date())

  return (
    <MobileLayout title="Events" showBack backHref="/">
      <div className="p-4 space-y-4">
        {/* Header with Add Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Upcoming Events</h2>
          <Link href="/events/create">
            <Button>
              <Plus className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Upcoming Events */}
        <div className="space-y-3">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <Link key={event.id} href={`/events/${event.id}`}>
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-medium text-lg">{event.title}</h3>
                        <div className="space-y-2 mt-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          {event.location && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                          )}
                          {event.organizer && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <User className="h-4 w-4" />
                              <span>{event.organizer}</span>
                            </div>
                          )}
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                          <Badge
                            variant={
                              event.type === "service" ? "default" : event.type === "meeting" ? "secondary" : "outline"
                            }
                            className="text-xs"
                          >
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">No upcoming events</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Past Events Section */}
        {pastEvents.length > 0 && (
          <>
            <div className="pt-4">
              <h2 className="text-lg font-semibold text-muted-foreground">Past Events</h2>
            </div>
            <div className="space-y-3">
              {pastEvents.slice(0, 3).map((event) => (
                <Card key={event.id} className="opacity-75">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-medium">{event.title}</h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                          <span>{event.time}</span>
                        </div>
                        <Badge variant="outline" className="text-xs mt-2">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Add Event Button */}
        <div className="mt-6">
          <Link href="/events/create">
            <Button className="w-full" size="lg">
              <Plus className="h-4 w-4 mr-2" />
              Create New Event
            </Button>
          </Link>
        </div>
      </div>
    </MobileLayout>
  )
}
