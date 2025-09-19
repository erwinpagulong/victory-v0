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

export type MusicMinistryMember = {
  id: string
  name: string
  instrument: string
  role: string
  status: "Active" | "Inactive" | "On Leave"
  experience: string
  joinDate: string
  availability: string
  contact: string
}

const data: MusicMinistryMember[] = [
  {
    id: "1",
    name: "Juan Dela Cruz",
    instrument: "Guitar",
    role: "Worship Leader",
    status: "Active",
    experience: "5+ years",
    joinDate: "2023-01-15",
    availability: "Sunday AM/PM",
    contact: "juan@victorycubao.com",
  },
  {
    id: "2",
    name: "Maria Santos",
    instrument: "Piano",
    role: "Keyboardist",
    status: "Active",
    experience: "3 years",
    joinDate: "2023-03-20",
    availability: "Sunday AM",
    contact: "maria@victorycubao.com",
  },
  {
    id: "3",
    name: "Carlos Mendoza",
    instrument: "Drums",
    role: "Drummer",
    status: "Active",
    experience: "4 years",
    joinDate: "2023-02-10",
    availability: "Sunday PM",
    contact: "carlos@victorycubao.com",
  },
  {
    id: "4",
    name: "Ana Garcia",
    instrument: "Vocals",
    role: "Lead Vocalist",
    status: "On Leave",
    experience: "6+ years",
    joinDate: "2022-11-05",
    availability: "Sunday AM/PM",
    contact: "ana@victorycubao.com",
  },
  {
    id: "5",
    name: "Pedro Rodriguez",
    instrument: "Bass",
    role: "Bassist",
    status: "Active",
    experience: "2 years",
    joinDate: "2023-06-15",
    availability: "Sunday AM",
    contact: "pedro@victorycubao.com",
  },
]

export const columns: ColumnDef<MusicMinistryMember>[] = [
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
    header: "Name",
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "instrument",
    header: "Instrument",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const statusColors = {
        Active: "bg-[#61c556]",
        Inactive: "bg-gray-500",
        "On Leave": "bg-[#fcba2d]",
      }
      return <Badge className={statusColors[status as keyof typeof statusColors] || "bg-gray-500"}>{status}</Badge>
    },
  },
  {
    accessorKey: "experience",
    header: "Experience",
  },
  {
    accessorKey: "availability",
    header: "Availability",
  },
  {
    accessorKey: "joinDate",
    header: "Join Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("joinDate"))
      return date.toLocaleDateString()
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const member = row.original

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
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(member.contact)}>
              Copy contact
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View profile</DropdownMenuItem>
            <DropdownMenuItem>Edit member</DropdownMenuItem>
            <DropdownMenuItem>Schedule audition</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function MusicMinistryPage() {
  return (
    <div className="flex flex-col h-full">
      <Header
        title="Music Ministry List"
        actions={
          <Button className="bg-[#9e56ff] hover:bg-[#491b6d]">
            <Plus className="w-4 h-4 mr-2" />
            Add Member
          </Button>
        }
      />

      <div className="flex-1 p-6">
        <DataTable
          columns={columns}
          data={data}
          searchKey="name"
          searchPlaceholder="Search music ministry members..."
        />
      </div>
    </div>
  )
}
