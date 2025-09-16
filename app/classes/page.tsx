import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MobileLayout } from "@/components/mobile-layout"
import { Search, Plus, ChevronRight, Users, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { classes } from "@/lib/data"

export default function ClassesPage() {
  return (
    <MobileLayout title="Class List" showBack backHref="/">
      <div className="p-4">
        {/* Search and Add */}
        <div className="flex justify-between items-center mb-4">
          <div className="relative flex-1 mr-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search classes..." className="pl-10" />
          </div>
          <Link href="/classes/create">
            <Button>
              <Plus className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Class List */}
        <div className="space-y-3">
          {classes.map((classItem) => (
            <Link key={classItem.id} href={`/classes/${classItem.id}`}>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">{classItem.name}</h3>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>Instructor: {classItem.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{classItem.schedule}</span>
                        </div>
                        {classItem.location && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{classItem.location}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <Badge variant="outline" className="text-xs">
                          {classItem.members} members
                        </Badge>
                        {classItem.description && (
                          <Badge variant="secondary" className="text-xs">
                            {classItem.description}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Add Class Button */}
        <div className="mt-6">
          <Link href="/classes/create">
            <Button className="w-full" size="lg">
              <Plus className="h-4 w-4 mr-2" />
              Create New Class
            </Button>
          </Link>
        </div>
      </div>
    </MobileLayout>
  )
}
