import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export const iframeHeight = "800px"

export const description = "The user's Dashboard"

const appointments = [
  {
    appointment: "APT001",
    doctor: "Dr. Sarah Williams - Cardiologist",
    time: "2025-09-10 10:00 AM",
    description: "Routine heart check-up",
    status: "Scheduled"
  },
  {
    appointment: "APT002",
    doctor: "Dr. James Lee - Dermatologist",
    time: "2025-09-11 02:00 PM",
    description: "Skin rash consultation",
    status: "Completed"
  },
  {
    appointment: "APT003",
    doctor: "Dr. Emily Chen - Orthopedic",
    time: "2025-09-12 11:30 AM",
    description: "Knee pain follow-up",
    status: "Cancelled"
  },
  {
    appointment: "APT004",
    doctor: "Dr. Michael Brown - Neurologist",
    time: "2025-09-13 09:00 AM",
    description: "Migraine evaluation",
    status: "Scheduled"
  },
  {
    appointment: "APT005",
    doctor: "Dr. Olivia Patel - Pediatrician",
    time: "2025-09-14 03:00 PM",
    description: "Child wellness check",
    status: "Completed"
  },
  {
    appointment: "APT006",
    doctor: "Dr. Daniel Kim - ENT Specialist",
    time: "2025-09-15 01:30 PM",
    description: "Ear infection follow-up",
    status: "Scheduled"
  },
  {
    appointment: "APT007",
    doctor: "Dr. Sophia Martinez - General Physician",
    time: "2025-09-16 10:30 AM",
    description: "Annual physical examination",
    status: "Scheduled"
  },
];


export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="w-full h-max">
          <h1 className="mb-2">Appointments</h1>
          <hr />
      </div>
      <Table>
      <TableCaption>Your upcoming Appointments.</TableCaption>
      <TableHeader>
          <TableRow>
          <TableHead className="w-[100px]">Index</TableHead>
          <TableHead>Doctor</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Time</TableHead>
          <TableHead className="text-right">Status</TableHead>
          </TableRow>
      </TableHeader>
      <TableBody>
          {appointments.map((appointment) => (
          <TableRow key={appointment.appointment}>
              <TableCell className="font-medium">{appointment.appointment}</TableCell>
              <TableCell>{appointment.doctor}</TableCell>
              <TableCell>{appointment.description}</TableCell>
              <TableCell className="text-right">{appointment.time}</TableCell>
              <TableCell className="text-right">{appointment.status}</TableCell>
          </TableRow>
          ))}
      </TableBody>
      </Table>
    </div>
  )
}
