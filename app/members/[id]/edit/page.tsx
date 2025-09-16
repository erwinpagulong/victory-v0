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
import { members } from "@/lib/data"
import { notFound } from "next/navigation"
import { use } from "react"

interface EditMemberPageProps {
  params: Promise<{ id: string }>
}

export default function EditMemberPage({ params }: EditMemberPageProps) {
  const { id } = use(params)
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const member = members.find((m) => m.id === id)

  if (!member) {
    notFound()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    router.push(`/members/${id}`)
  }

  return (
    <MobileLayout title="Edit Profile" showBack backHref={`/members/${id}`}>
      <div className="p-4 space-y-4">
        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" defaultValue={member.name} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" defaultValue={member.email} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" defaultValue={member.phone} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" defaultValue={member.address} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ministry">Ministry</Label>
                <Select defaultValue={member.ministry.toLowerCase().replace(" ", "-")}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="worship-team">Worship Team</SelectItem>
                    <SelectItem value="kids-ministry">Kids Ministry</SelectItem>
                    <SelectItem value="youth-ministry">Youth Ministry</SelectItem>
                    <SelectItem value="victory-groups">Victory Groups</SelectItem>
                    <SelectItem value="ushering">Ushering</SelectItem>
                    <SelectItem value="media-team">Media Team</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue={member.role} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select defaultValue={member.status}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-2 mt-4">
            <Button type="button" variant="outline" className="flex-1 bg-transparent" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </div>
    </MobileLayout>
  )
}
