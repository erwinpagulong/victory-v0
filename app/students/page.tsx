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

export type Student = {
  id: string
  name: string
  email: string
  course: string
  status: "Active" | "Inactive" | "Graduated" | "Dropped"
  enrollmentDate: string
  progress: number
  mentor: string
}

const data: Student[] = [
  {
    id: "1",
    name: "Maria Santos",
    email: "maria@victorycubao.com",
    course: "Discipleship 101",
    status: "Active",
    enrollmentDate: "2024-01-15",
    progress: 75,
    mentor: "Pastor John",
  },
  {
    id: "2",
    name: "Carlos Mendoza",
    email: "carlos@victorycubao.com",
    course: "Leadership Training",
    status: "Active",
    enrollmentDate: "2024-01-10",
    progress: 60,
    mentor: "Pastor Sarah",
  },
  {
    id: "3",
    name: "Ana Garcia",
    email: "ana@victorycubao.com",
    course: "Music Ministry Training",
    status: "Graduated",
    enrollmentDate: "2023-11-20",
    progress: 100,
    mentor: "Worship Leader Mike",
  },
  {
    id: "4",
    name: "Pedro Rodriguez",
    email: "pedro@victorycubao.com",
    course: "Youth Ministry Training",
    status: "Inactive",
    enrollmentDate: "2023-12-05",
    progress: 30,
    mentor: "Youth Pastor Lisa",
  },
  {
    id: "5",
    name: "Juan Dela Cruz",
    email: "juan@victorycubao.com",
    course: "Evangelism Training",
    status: "Active",
    enrollmentDate: "2024-01-08",
    progress: 45,
    mentor: "Pastor Mark",
  },
]

export const columns: ColumnDef<Student>[] = [
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
    accessorKey: "name",
    header: "Student Name",
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "course",
    header: "Course",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const statusColors = {
        Active: "bg-[#61c556]",
        Inactive: "bg-gray-500",
        Graduated: "bg-[#9e56ff]",
        Dropped: "bg-red-500",
      }
      return <Badge className={statusColors[status as keyof typeof statusColors] || "bg-gray-500"}>{status}</Badge>
    },
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => {
      const progress = row.getValue("progress") as number
      return (
        <div className="flex items-center gap-2">
          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#9e56ff] transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-sm text-gray-600">{progress}%</span>
        </div>
      )
    },
  },
  {
    accessorKey: "mentor",
    header: "Mentor",
  },
  {
    accessorKey: "enrollmentDate",
    header: "Enrollment Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("enrollmentDate"))
      return date.toLocaleDateString()
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const student = row.original

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
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(student.id)}>
              Copy student ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View student</DropdownMenuItem>
            <DropdownMenuItem>Edit student</DropdownMenuItem>
            <DropdownMenuItem>Send message</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function StudentsPage() {
  return (
    <div className="flex flex-col h-full">
      <Header
        title="Student List"
        actions={
          <Button className="bg-[#9e56ff] hover:bg-[#491b6d]">
            <Plus className="w-4 h-4 mr-2" />
            Add Student
          </Button>
        }
      />

      <div className="flex-1 p-6">
        <DataTable columns={columns} data={data} searchKey="name" searchPlaceholder="Search students..." />
      </div>
    </div>
  )
}
