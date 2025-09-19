import { SiteHeader } from "@/components/site-header"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export const iframeHeight = "800px"

export const description = "The user's Dashboard"

const medicalReports = [
  {
    medicalReport: "REP001 - CBC",
    Report: "Reviewed",
    issuedAt: "$120.00",
    Description: "Complete Blood Count",
  },
  {
    medicalReport: "REP002 - XRAY",
    Report: "Pending",
    issuedAt: "$200.00",
    Description: "Chest X-Ray",
  },
  {
    medicalReport: "REP003 - MRI",
    Report: "Abnormal",
    issuedAt: "$800.00",
    Description: "Brain MRI Scan",
  },
  {
    medicalReport: "REP004 - LIPID",
    Report: "Reviewed",
    issuedAt: "$150.00",
    Description: "Lipid Profile",
  },
  {
    medicalReport: "REP005 - COVID",
    Report: "Pending",
    issuedAt: "$100.00",
    Description: "COVID-19 PCR Test",
  },
  {
    medicalReport: "REP006 - ECG",
    Report: "Normal",
    issuedAt: "$90.00",
    Description: "Electrocardiogram",
  },
  {
    medicalReport: "REP007 - USG ABD",
    Report: "Reviewed",
    issuedAt: "$250.00",
    Description: "Abdominal Ultrasound",
  },
  {
    medicalReport: "REP008 - THYROID",
    Report: "Abnormal",
    issuedAt: "$180.00",
    Description: "Thyroid Function Test",
  },
  {
    medicalReport: "REP009 - HBA1C",
    Report: "Normal",
    issuedAt: "$130.00",
    Description: "HbA1c Diabetes Test",
  },
  {
    medicalReport: "REP010 - DENGUE",
    Report: "Pending",
    issuedAt: "$110.00",
    Description: "Dengue IgM/IgG Test",
  },
];


export default function Page() {
  return (
    <>
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="w-full h-max">
          <h1 className="mb-2">Medical Reports</h1>
          <hr />
      </div>
      <Table>
      <TableCaption>A list of your recent Medical Reports.</TableCaption>
      <TableHeader>
          <TableRow>
          <TableHead className="w-[100px]">Index</TableHead>
          <TableHead>Report</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Issued At</TableHead>
          <TableHead className="text-right">Issued By</TableHead>
          </TableRow>
      </TableHeader>
      <TableBody>
          {medicalReports.map((medicalReport) => (
          <TableRow key={medicalReport.medicalReport}>
              <TableCell className="font-medium">{medicalReport.medicalReport}</TableCell>
              <TableCell>{medicalReport.Report}</TableCell>
              <TableCell>{medicalReport.Description}</TableCell>
              <TableCell className="text-right">{medicalReport.issuedAt}</TableCell>
              <TableCell className="text-right">{medicalReport.issuedAt}</TableCell>
          </TableRow>
          ))}
      </TableBody>
      </Table>
    </div>   
    </>

  )
}
