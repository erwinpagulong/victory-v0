"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts"
import { Users, Calendar, TrendingUp, Award } from "lucide-react"
import type { User } from "@supabase/supabase-js"

const membershipData = [
  { month: "Jan", members: 120 },
  { month: "Feb", members: 135 },
  { month: "Mar", members: 148 },
  { month: "Apr", members: 162 },
  { month: "May", members: 175 },
  { month: "Jun", members: 189 },
]

const ministryData = [
  { name: "Music Ministry", value: 45, color: "#9e56ff" },
  { name: "Youth Ministry", value: 32, color: "#fcba2d" },
  { name: "Children's Ministry", value: 28, color: "#61c556" },
  { name: "Ushering", value: 25, color: "#2281e3" },
  { name: "Others", value: 20, color: "#e4e4e4" },
]

const attendanceData = [
  { week: "Week 1", attendance: 85 },
  { week: "Week 2", attendance: 92 },
  { week: "Week 3", attendance: 78 },
  { week: "Week 4", attendance: 95 },
]

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2024-01-15",
    time: "10:00 AM",
    status: "upcoming",
    color: "#9e56ff",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2024-01-20",
    time: "2:00 PM",
    status: "upcoming",
    color: "#fcba2d",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2024-01-25",
    time: "6:00 PM",
    status: "upcoming",
    color: "#9e56ff",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2024-01-30",
    time: "9:00 AM",
    status: "upcoming",
    color: "#fcba2d",
  },
]

const announcements = [
  {
    id: 1,
    title: "Victory Groups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    priority: "high",
    date: "2024-01-10",
  },
  {
    id: 2,
    title: "Victory Groups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    priority: "medium",
    date: "2024-01-12",
  },
  {
    id: 3,
    title: "Victory Groups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    priority: "low",
    date: "2024-01-14",
  },
]

interface DashboardClientProps {
  user: User
}

export function DashboardClient({ user }: DashboardClientProps) {
  return (
    <div className="flex flex-col h-full">
      <Header title={`Welcome back, ${user.user_metadata?.first_name || user.email?.split("@")[0] || "User"}!`} />

      <div className="flex-1 p-6 space-y-6">
        {/* User Info Card */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  {user.user_metadata?.first_name && user.user_metadata?.last_name
                    ? `${user.user_metadata.first_name} ${user.user_metadata.last_name}`
                    : user.email}
                </h2>
                <p className="text-blue-100 text-sm">{user.email}</p>
                <p className="text-blue-100 text-xs mt-1">
                  Member since {new Date(user.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">
                  {user.user_metadata?.first_name?.[0] || user.email?.[0]?.toUpperCase() || "U"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Members</p>
                  <p className="text-2xl font-bold">189</p>
                  <p className="text-xs text-green-600 mt-1">+12% from last month</p>
                </div>
                <div className="w-12 h-12 bg-[#9e56ff] rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Events This Month</p>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-xs text-green-600 mt-1">+8% from last month</p>
                </div>
                <div className="w-12 h-12 bg-[#fcba2d] rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Attendance</p>
                  <p className="text-2xl font-bold">87%</p>
                  <p className="text-xs text-green-600 mt-1">+3% from last month</p>
                </div>
                <div className="w-12 h-12 bg-[#61c556] rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Ministries</p>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-xs text-green-600 mt-1">+2 new this month</p>
                </div>
                <div className="w-12 h-12 bg-[#2281e3] rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Membership Growth Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Membership Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={membershipData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Line type="monotone" dataKey="members" stroke="#9e56ff" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Ministry Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Ministry Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={ministryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {ministryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {ministryData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span>{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Events */}
          <Card>
            <CardHeader>
              <CardTitle>Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="flex items-start gap-4 p-4 rounded-lg border">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: event.color }}></div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{event.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{event.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-gray-500">{new Date(event.date).toLocaleDateString()}</span>
                      <span className="text-xs text-gray-500">{event.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card>
            <CardHeader>
              <CardTitle>Announcements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="p-4 rounded-lg border">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-sm">{announcement.title}</h4>
                    <Badge
                      variant="secondary"
                      className={
                        announcement.priority === "high"
                          ? "bg-red-100 text-red-800"
                          : announcement.priority === "medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }
                    >
                      {announcement.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{announcement.description}</p>
                  <span className="text-xs text-gray-400">{new Date(announcement.date).toLocaleDateString()}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
