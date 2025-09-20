"use client";

import React from "react";
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation";
import { Loader2Icon } from "lucide-react";


export default function DashboardLayout({children}: {children: React.ReactNode}) {
  const [loading, setLoading] = React.useState(true);
  const page = usePathname().split("/")[2][0].toUpperCase() + usePathname().split("/")[2].slice(1);
  console.log("page",page);
  React.useEffect(() => {
    setLoading(true);
    if (localStorage.getItem('accessToken') == null) { 
      window.location.href = '/login';  
    }
    setLoading(false);
  }, []);
  if (loading) {   
    return <div className="flex h-screen w-screen items-center justify-center">
      <Loader2Icon/>
    </div>;
   }
    return (
      <div className="[--header-height:calc(--spacing(14))]">
        <SidebarProvider className="flex flex-col">
          <SiteHeader name={page}/>
          <div className="flex flex-1">
            <AppSidebar />
            <SidebarInset>
              {children}
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
        
    )
} 