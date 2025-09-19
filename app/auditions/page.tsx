"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Music, Phone, Mail } from "lucide-react"

const upcomingAuditions = [
  {
    id: "1",
    name: "Sarah Johnson",
    instrument: "Vocals",
    date: "2024-01-25",
    time: "2:00 PM",
    status: "Scheduled",
    contact: "sarah@email.com",
    phone: "+63 912 345 6789",
  },
  {
    id: "2",
    name: "Michael Chen",
    instrument: "Guitar",
    date: "2024-01-26",
    time: "3:00 PM",
    status: "Scheduled",
    contact: "michael@email.com",
    phone: "+63 912 345 6790",
  },
  {
    id: "3",
    name: "Lisa Rodriguez",
    instrument: "Piano",
    date: "2024-01-27",
    time: "1:00 PM",
    status: "Confirmed",
    contact: "lisa@email.com",
    phone: "+63 912 345 6791",
  },
]

export default function AuditionsPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Music Audition" />

      <div className="flex-1 p-6 space-y-6">
        {/* Audition Form */}
        <Card>
          <CardHeader>
            <CardTitle>Schedule New Audition</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instrument">Instrument/Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select instrument or role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vocals">Vocals</SelectItem>
                    <SelectItem value="guitar">Guitar</SelectItem>
                    <SelectItem value="piano">Piano/Keyboard</SelectItem>
                    <SelectItem value="drums">Drums</SelectItem>
                    <SelectItem value="bass">Bass</SelectItem>
                    <SelectItem value="violin">Violin</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Audition Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Audition Time</Label>
                <Input id="time" type="time" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Musical Experience</Label>
              <Textarea id="experience" placeholder="Describe your musical background and experience..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" placeholder="Any additional information or special requirements..." />
            </div>
            <Button className="bg-[#fcba2d] hover:bg-[#fcc547] text-black">Schedule Audition</Button>
          </CardContent>
        </Card>

        {/* Upcoming Auditions */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Auditions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAuditions.map((audition) => (
                <div key={audition.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#9e56ff] rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">{audition.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <div className="flex items-center gap-1">
                          <Music className="w-4 h-4" />
                          <span>{audition.instrument}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(audition.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{audition.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <div className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          <span>{audition.contact}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          <span>{audition.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="secondary"
                      className={
                        audition.status === "Confirmed" ? "bg-[#61c556] text-white" : "bg-[#fcba2d] text-black"
                      }
                    >
                      {audition.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
