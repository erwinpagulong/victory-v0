import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileLayout } from "@/components/mobile-layout"
import { Music, Calendar, Users, Mic, Guitar, Piano } from "lucide-react"
import Link from "next/link"
import { musicTeamMembers } from "@/lib/data"

export default function MusicTeamPage() {
  const activeMembers = musicTeamMembers.filter((member) => member.status === "active")
  const auditionMembers = musicTeamMembers.filter((member) => member.status === "audition")

  const getInstrumentIcon = (instrument: string) => {
    switch (instrument.toLowerCase()) {
      case "vocals":
        return <Mic className="h-4 w-4" />
      case "guitar":
        return <Guitar className="h-4 w-4" />
      case "piano":
        return <Piano className="h-4 w-4" />
      default:
        return <Music className="h-4 w-4" />
    }
  }

  return (
    <MobileLayout title="Music Team" showBack backHref="/">
      <div className="p-4 space-y-4">
        {/* Header Card */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Music className="h-8 w-8" />
              <div>
                <h2 className="font-bold">Music Ministry</h2>
                <p className="text-sm text-primary-foreground/90">Leading worship every Sunday</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{activeMembers.length}</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-secondary">3</div>
              <div className="text-sm text-muted-foreground">Upcoming Events</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/music/auditions">
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Music className="h-4 w-4 mr-2" />
                Music Auditions
              </Button>
            </Link>
            <Button className="w-full justify-start bg-transparent" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Practice
            </Button>
            <Link href="/music/members">
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                View Team Members
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Active Team Members */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Active Members</CardTitle>
              <Link href="/music/members">
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {activeMembers.slice(0, 3).map((member) => (
              <div key={member.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium text-sm">{member.name}</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    {getInstrumentIcon(member.instrument)}
                    <span>{member.instrument}</span>
                  </div>
                </div>
                <Badge variant="default" className="text-xs">
                  {member.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pending Auditions */}
        {auditionMembers.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Pending Auditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {auditionMembers.map((member) => (
                <div key={member.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{member.name}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      {getInstrumentIcon(member.instrument)}
                      <span>{member.instrument}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {member.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </MobileLayout>
  )
}
