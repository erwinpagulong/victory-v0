import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileLayout } from "@/components/mobile-layout"
import { Users, Plus, ChevronRight, Crown, Heart } from "lucide-react"
import Link from "next/link"
import { ministries } from "@/lib/data"

export default function MinistryPage() {
  return (
    <MobileLayout title="Ministry List" showBack backHref="/">
      <div className="p-4 space-y-4">
        {/* Header Card */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Heart className="h-8 w-8" />
              <div>
                <h2 className="font-bold">Victory Ministries</h2>
                <p className="text-sm text-primary-foreground/90">Serving with excellence</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ministry Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{ministries.length}</div>
              <div className="text-sm text-muted-foreground">Active Ministries</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-secondary">
                {ministries.reduce((total, ministry) => total + ministry.members, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Volunteers</div>
            </CardContent>
          </Card>
        </div>

        {/* Ministry List */}
        <div className="space-y-3">
          {ministries.map((ministry) => (
            <Link key={ministry.id} href={`/ministry/${ministry.id}`}>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Crown className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{ministry.name}</h3>
                      <p className="text-sm text-muted-foreground">Leader: {ministry.leader}</p>
                      {ministry.description && (
                        <p className="text-xs text-muted-foreground mt-1">{ministry.description}</p>
                      )}
                      <Badge variant="outline" className="text-xs mt-2">
                        {ministry.members} members
                      </Badge>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-transparent" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Create New Ministry
            </Button>
            <Button className="w-full justify-start bg-transparent" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              View All Volunteers
            </Button>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  )
}
