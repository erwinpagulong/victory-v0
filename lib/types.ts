export interface Member {
  id: string
  name: string
  role: string
  email: string
  phone: string
  address: string
  ministry: string
  avatar?: string
  dateJoined?: string
  status: "active" | "inactive"
}

export interface Class {
  id: string
  name: string
  instructor: string
  schedule: string
  members: number
  description?: string
  location?: string
}

export interface Event {
  id: string
  title: string
  date: string
  time: string
  description: string
  type: "service" | "meeting" | "event"
  location?: string
  organizer?: string
}

export interface Ministry {
  id: string
  name: string
  leader: string
  members: number
  description?: string
}

export interface MusicTeamMember {
  id: string
  name: string
  instrument: string
  email: string
  phone: string
  experience: string
  availability: string
  status: "active" | "audition" | "inactive"
}
