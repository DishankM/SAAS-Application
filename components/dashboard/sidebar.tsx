"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import  SquidLogo  from "../../public/Vector.png"
import { LayoutDashboard, Users, Settings, LogOut, X, Menu } from "lucide-react"
import { useAuth } from "@/lib/auth"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/users", label: "Users", icon: Users },
  { href: "/settings", label: "Settings", icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const { logout, user } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)

  const sidebarContent = (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex items-center justify-between px-5 py-5">
        <Link href="/dashboard" className="flex items-center gap-2" aria-label="Squid dashboard">
          <img src={SquidLogo.src} alt="Squid Logo" />
          <span className="text-white font-heading text-lg font-bold">Squid</span>
        </Link>
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden text-white/40 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B] rounded-sm"
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4" aria-label="Dashboard navigation">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B]",
                    isActive
                      ? "bg-[#E8505B]/10 text-[#E8505B]"
                      : "text-white/50 hover:bg-white/[0.04] hover:text-white/80"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User section */}
      <div className="border-t border-white/[0.06] px-3 py-4">
        {user && (
          <div className="flex items-center gap-3 px-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8505B]/15 text-[#E8505B] text-xs font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">{user.name}</p>
              <p className="truncate text-xs text-white/40">{user.email}</p>
            </div>
          </div>
        )}
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/50 transition-colors hover:bg-white/[0.04] hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B]"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden flex h-9 w-9 items-center justify-center rounded-lg bg-[#12121e] border border-white/[0.08] text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B]"
        aria-label="Open sidebar"
      >
        <Menu className="h-4 w-4" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-[#0d0d18] border-r border-white/[0.06] transition-transform duration-200 lg:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-label="Sidebar"
      >
        {sidebarContent}
      </aside>

      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-[#0d0d18] border-r border-white/[0.06]"
        aria-label="Sidebar"
      >
        {sidebarContent}
      </aside>

      {/* Desktop spacer */}
      <div className="hidden lg:block lg:w-64 lg:flex-shrink-0" />
    </>
  )
}
