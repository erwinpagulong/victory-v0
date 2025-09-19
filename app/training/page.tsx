"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/data-table"
import { Badge } from "@/components/ui/badge"
import type { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal, Plus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Training = {
  id: string
  title: string
  instructor: string
  category: string
  duration: string
  status: "Active" | "Upcoming" | "Completed" | "Cancelled"
  enrolled: number
  capacity: number
  startDate: string
  endDate: string
}

const data: Training[] = [
  {
    id: "1",
    title: "Discipleship 101",
    instructor: "Pastor John Smith",
    category: "Discipleship",
    duration: "8 weeks",
    status: "Active",
    enrolled: 25,
    capacity: 30,
    startDate: "2024-01-15",
    endDate: "2024-03-10",
  },
  {
    id: "2",
    title: "Leadership Training",
    instructor: "Pastor Sarah Johnson",
    category: "Leadership",
    duration: "12 weeks",
    status: "Upcoming",
    enrolled: 18,
    capacity: 25,
    startDate: "2024-02-01",
    endDate: "2024-04-25",
  },
  {
    id: "3",
    title: "Music Ministry Training",
    instructor: "Worship Leader Mike",
    category: "Music",
    duration: "6 weeks",
    status: "Active",
    enrolled: 15,
    capacity: 20,
    startDate: "2024-01-08",
    endDate: "2024-02-19",
  },
  {
    id: "4",
    title: "Youth Ministry Training",
    instructor: "Youth Pastor Lisa",
    category: "Youth",
    duration: "10 weeks",
    status: "Completed",
    enrolled: 22,
    capacity: 25,
    startDate: "2023-11-01",
    endDate: "2024-01-10",
  },
  {
    id: "5",
    title: "Evangelism Training",
    instructor: "Pastor Mark Davis",
    category: "Evangelism",
    duration: "4 weeks",
    status: "Upcoming",
    enrolled: 12,
    capacity: 20,
    startDate: "2024-02-15",
    endDate: "2024-03-15",
  },
]

export const columns: ColumnDef<Training>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Training Title",
    cell: ({ row }) => <div className="font-medium">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "instructor",
    header: "Instructor",
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const category = row.getValue("category") as string
      const categoryColors = {
        Discipleship: "bg-[#9e56ff]",
        Leadership: "bg-[#fcba2d]",
        Music: "bg-[#61c556]",
        Youth: "bg-[#2281e3]",
        Evangelism: "bg-[#e72625]",
      }
      return (
        <Badge className={categoryColors[category as keyof typeof categoryColors] || "bg-gray-500"}>{category}</Badge>
      )
    },
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const statusColors = {
        Active: "bg-[#61c556]",
        Upcoming: "bg-[#fcba2d]",
        Completed: "bg-[#9e56ff]",
        Cancelled: "bg-gray-500",
      }
      return <Badge className={statusColors[status as keyof typeof statusColors] || "bg-gray-500"}>{status}</Badge>
    },
  },
  {
    accessorKey: "enrolled",
    header: "Enrolled",
    cell: ({ row }) => {
      const enrolled = row.getValue("enrolled") as number
      const capacity = row.original.capacity
      return (
        <div className="text-sm">
          {enrolled}/{capacity}
        </div>
      )
    },
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("startDate"))
      return date.toLocaleDateString()
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const training = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(training.id)}>
              Copy training ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View training</DropdownMenuItem>
            <DropdownMenuItem>Edit training</DropdownMenuItem>
            <DropdownMenuItem>Manage enrollment</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function TrainingPage() {
  return (
    <div className="flex flex-col h-full">
      <Header
        title="Training/Subject List"
        actions={
          <Button className="bg-[#9e56ff] hover:bg-[#491b6d]">
            <Plus className="w-4 h-4 mr-2" />
            Add Training
          </Button>
        }
      />

      <div className="flex-1 p-6">
        <DataTable columns={columns} data={data} searchKey="title" searchPlaceholder="Search training programs..." />
      </div>
    </div>
  )
}
