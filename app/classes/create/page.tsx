"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MobileLayout } from "@/components/mobile-layout"
import { useRouter } from "next/navigation"

export default function CreateClassPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    router.push("/classes")
  }

  return (
    <MobileLayout title="Create a class" showBack backHref="/classes">
      <div className="p-4 space-y-4">
        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Class Name *</Label>
                <Input id="name" placeholder="Enter class name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructor">Instructor *</Label>
                <Input id="instructor" placeholder="Enter instructor name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="schedule">Schedule *</Label>
                <Input id="schedule" placeholder="e.g., Sundays 10:00 AM" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter location" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter class description" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="capacity">Maximum Capacity</Label>
                <Input id="capacity" type="number" placeholder="Enter maximum number of members" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Class Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="service">Service</SelectItem>
                    <SelectItem value="bible-study">Bible Study</SelectItem>
                    <SelectItem value="victory-group">Victory Group</SelectItem>
                    <SelectItem value="ministry">Ministry</SelectItem>
                    <SelectItem value="training">Training</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Button type="submit" className="w-full mt-4" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "CREATE"}
          </Button>
        </form>
      </div>
    </MobileLayout>
  )
}
