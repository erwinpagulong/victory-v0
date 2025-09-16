import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileLayout } from "@/components/mobile-layout"
import { Search, Plus, ChevronRight, Filter } from "lucide-react"
import Link from "next/link"
import { members } from "@/lib/data"

export default function MembersPage() {
  return (
    <MobileLayout title="Member Lists" showBack backHref="/">
      <div className="p-4">
        {/* Search and Filter */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search members..." className="pl-10" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Link href="/members/create">
            <Button>
              <Plus className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Member List */}
        <div className="space-y-3">
          {members.map((member) => (
            <Link key={member.id} href={`/members/${member.id}`}>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={member.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">{member.role}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {member.ministry}
                        </Badge>
                        <Badge variant={member.status === "active" ? "default" : "outline"} className="text-xs">
                          {member.status}
                        </Badge>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Add Member Button */}
        <div className="mt-6">
          <Link href="/members/create">
            <Button className="w-full" size="lg">
              <Plus className="h-4 w-4 mr-2" />
              Add New Member
            </Button>
          </Link>
        </div>
      </div>
    </MobileLayout>
  )
}
