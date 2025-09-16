import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileLayout } from "@/components/mobile-layout"
import { Search, Plus, ChevronRight, Mic, Guitar, Piano, Music, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { musicTeamMembers } from "@/lib/data"

export default function MusicMembersPage() {
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
    <MobileLayout title="Music Team Members" showBack backHref="/music">
      <div className="p-4 space-y-4">
        {/* Search and Add */}
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search team members..."
              className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-sm"
            />
          </div>
          <Link href="/music/auditions">
            <Button>
              <Plus className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Team Members List */}
        <div className="space-y-3">
          {musicTeamMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium">{member.name}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      {getInstrumentIcon(member.instrument)}
                      <span>{member.instrument}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{member.availability}</div>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge
                        variant={
                          member.status === "active"
                            ? "default"
                            : member.status === "audition"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {member.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Member Button */}
        <div className="mt-6">
          <Link href="/music/auditions">
            <Button className="w-full" size="lg">
              <Plus className="h-4 w-4 mr-2" />
              Add Team Member
            </Button>
          </Link>
        </div>
      </div>
    </MobileLayout>
  )
}
