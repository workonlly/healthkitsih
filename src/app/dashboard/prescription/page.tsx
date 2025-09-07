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

const prescriptions = [
  {
    prescription: "PRC001",
    pill: "Paracetamol 500mg",
    timeInterval: "3 times/day",
    Description: "Take after meals",
  },
  {
    prescription: "PRC002",
    pill: "Amoxicillin 250mg",
    timeInterval: "2 times/day",
    Description: "Finish the full course",
  },
  {
    prescription: "PRC003",
    pill: "Metformin 500mg",
    timeInterval: "Once daily",
    Description: "Take in the morning with food",
  },
  {
    prescription: "PRC004",
    pill: "Aspirin 75mg",
    timeInterval: "Once daily",
    Description: "Take after breakfast",
  },
  {
    prescription: "PRC005",
    pill: "Omeprazole 20mg",
    timeInterval: "Once daily",
    Description: "Take before breakfast",
  },
  {
    prescription: "PRC006",
    pill: "Atorvastatin 10mg",
    timeInterval: "Once daily",
    Description: "Take in the evening",
  },
  {
    prescription: "PRC007",
    pill: "Ibuprofen 400mg",
    timeInterval: "3 times/day",
    Description: "Take after meals if pain persists",
  },
];


export default function Page() {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="w-full h-max">
                    <h1 className="mb-2">Prescriptions</h1>
                    <hr />
                </div>
                <Table>
                <TableCaption>A list of your recent Prescriptions.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Index</TableHead>
                    <TableHead>Pills</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Time Interval</TableHead>
                    <TableHead className="text-right">Dose per Day</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {prescriptions.map((prescription) => (
                    <TableRow key={prescription.prescription}>
                        <TableCell className="font-medium">{prescription.prescription}</TableCell>
                        <TableCell>{prescription.pill}</TableCell>
                        <TableCell>{prescription.Description}</TableCell>
                        <TableCell className="text-right">{prescription.timeInterval}</TableCell>
                        <TableCell className="text-right">{prescription.timeInterval}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
