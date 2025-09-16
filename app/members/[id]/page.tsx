import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileLayout } from "@/components/mobile-layout"
import { Phone, Mail, MapPin, Edit, Calendar, User } from "lucide-react"
import Link from "next/link"
import { members } from "@/lib/data"
import { notFound } from "next/navigation"

interface MemberProfilePageProps {
  params: Promise<{ id: string }>
}

export default async function MemberProfilePage({ params }: MemberProfilePageProps) {
  const { id } = await params
  const member = members.find((m) => m.id === id)

  if (!member) {
    notFound()
  }

  return (
    <MobileLayout title="Member Profile" showBack backHref="/members">
      <div className="p-4 space-y-4">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6 text-center">
            <Avatar className="w-20 h-20 mx-auto mb-4">
              <AvatarImage src={member.avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-lg">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p className="text-muted-foreground">{member.role}</p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <Badge className="bg-primary">{member.ministry}</Badge>
              <Badge variant={member.status === "active" ? "default" : "outline"}>{member.status}</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <User className="h-4 w-4" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Email</div>
                <div className="text-sm text-muted-foreground">{member.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Phone className="h-4 w-4 text-secondary" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Phone</div>
                <div className="text-sm text-muted-foreground">{member.phone}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                <MapPin className="h-4 w-4 text-accent" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Address</div>
                <div className="text-sm text-muted-foreground">{member.address}</div>
              </div>
            </div>
            {member.dateJoined && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Date Joined</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(member.dateJoined).toLocaleDateString()}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link href={`/members/${member.id}/edit`} className="flex-1">
            <Button className="w-full">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </Link>
          <Button variant="outline" size="icon">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </MobileLayout>
  )
}
