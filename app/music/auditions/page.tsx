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

export default function MusicAuditionsPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    router.push("/music")
  }

  return (
    <MobileLayout title="Music Audition" showBack backHref="/music">
      <div className="p-4 space-y-4">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-4">
            <h2 className="font-bold text-primary mb-2">Join Our Music Team!</h2>
            <p className="text-sm text-muted-foreground">
              We're looking for passionate musicians to join our worship team. Fill out the form below to apply for an
              audition.
            </p>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="Enter email address" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" placeholder="Enter phone number" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instrument">Instrument/Role *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your instrument or role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vocals">Vocals</SelectItem>
                    <SelectItem value="guitar">Guitar</SelectItem>
                    <SelectItem value="bass">Bass Guitar</SelectItem>
                    <SelectItem value="piano">Piano/Keyboard</SelectItem>
                    <SelectItem value="drums">Drums</SelectItem>
                    <SelectItem value="violin">Violin</SelectItem>
                    <SelectItem value="saxophone">Saxophone</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Musical Experience *</Label>
                <Textarea
                  id="experience"
                  placeholder="Tell us about your musical background, training, and experience"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Availability *</Label>
                <Textarea
                  id="availability"
                  placeholder="When are you available for practice and services? (e.g., Sundays, Wednesdays)"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ministry-experience">Ministry Experience</Label>
                <Textarea
                  id="ministry-experience"
                  placeholder="Do you have any previous experience in church ministry or worship teams?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="testimony">Personal Testimony</Label>
                <Textarea
                  id="testimony"
                  placeholder="Share a brief testimony about your faith and why you want to serve in music ministry"
                />
              </div>
            </CardContent>
          </Card>

          <Button type="submit" className="w-full mt-4" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "SUBMIT AUDITION"}
          </Button>
        </form>

        <Card className="bg-muted/50">
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">What to Expect</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• We'll review your application within 1-2 weeks</li>
              <li>• If selected, you'll be invited for a brief audition</li>
              <li>• Auditions are casual and encouraging</li>
              <li>• We'll provide feedback and next steps</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  )
}
