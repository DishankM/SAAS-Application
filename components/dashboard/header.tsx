"use client"

import { usePathname } from "next/navigation"

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/users": "Users",
  "/settings": "Settings",
}

export function DashboardHeader() {
  const pathname = usePathname()
  const title = pageTitles[pathname] || "Dashboard"

  return (
    <header className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4 pl-16 lg:pl-6">
      <h1 className="font-heading text-lg font-bold text-white">{title}</h1>
    </header>
  )
}
