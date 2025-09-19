import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export const iframeHeight = "800px"

export const description = "The user's Dashboard"

export default function Page() {
  return (
    <>
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="w-full h-max">
        <h1 className="mb-2">Profile</h1>
        <hr />
      </div>
      <div className="w-full h-max flex flex-col gap-5 px-3 py-2">
        <div className="w-full h-max flex justify-between gap-3 ">
          <div className="w-max ">
            <h1 className="text-lg mb-1">Name</h1>
            <h1 className="bg-[#262626] font-medium px-3 py-2 rounded-[15px] w-[200px]">Sitanshu Nayan</h1>
          </div>
          <div className="w-max ">
            <h1 className="text-lg mb-1">DOB</h1>
            <h1 className="bg-[#262626] font-medium px-3 py-2 rounded-[15px]">01-01-2000</h1>
          </div>
          <div className="w-max ">
            <h1 className="text-lg mb-1">Gender</h1>
            <h1 className="bg-[#262626] font-medium px-3 py-2 rounded-[15px]">Male</h1>
          </div>
          <div className="w-max ">
            <h1 className="text-lg mb-1">Height</h1>
            <h1 className="bg-[#262626] font-medium px-3 py-2 rounded-[15px]">6&#39;</h1>
          </div>
          <div className="w-max ">
            <h1 className="text-lg mb-1">Weight</h1>
            <h1 className="bg-[#262626] font-medium px-3 py-2 rounded-[15px]">60kg</h1>
          </div>
        </div>
        <div className="w-full h-max">
          <div className="w-max ">
            <h1 className="text-lg mb-1">Address</h1>
            <h1 className="bg-[#262626] font-medium px-3 py-2 rounded-[15px] w-[400px] truncate">413 W 40th St, New York, NY 10018, USA</h1>
          </div>
        </div>
        <div className="w-full h-max">
          <div className="w-[300px] h-[200px] bg-[262626]"></div>
        </div>
      </div>
    </div>
    </>

  )
}
