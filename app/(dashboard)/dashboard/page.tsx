"use client"

import useSWR from "swr"
import { Users, Building2, Globe, MapPin, AlertTriangle } from "lucide-react"
import { StatusCard } from "@/components/dashboard/status-card"

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: { name: string; catchPhrase: string; bs: string }
  address: { street: string; suite: string; city: string; zipcode: string; geo: { lat: string; lng: string } }
}

const fetcher = (url: string) => fetch(url).then((res) => {
  if (!res.ok) throw new Error("Failed to fetch data")
  return res.json()
})

export default function DashboardPage() {
  const { data: users, error, isLoading } = useSWR<User[]>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  )

  const totalUsers = users?.length ?? 0
  const uniqueCompanies = users ? new Set(users.map((u) => u.company.name)).size : 0
  const uniqueCities = users ? new Set(users.map((u) => u.address.city)).size : 0
  const uniqueWebsites = users ? users.filter((u) => u.website).length : 0

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E8505B]/10 mb-4">
          <AlertTriangle className="h-6 w-6 text-[#E8505B]" />
        </div>
        <h2 className="font-heading text-lg font-bold text-white">Failed to load data</h2>
        <p className="mt-2 text-sm text-white/40 max-w-sm">
          Something went wrong while fetching the dashboard data. Please check your connection and try again.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Status cards */}
      <section aria-label="Dashboard statistics">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatusCard title="Total Users" value={totalUsers} icon={Users} color="coral" loading={isLoading} />
          <StatusCard title="Companies" value={uniqueCompanies} icon={Building2} color="purple" loading={isLoading} />
          <StatusCard title="Cities" value={uniqueCities} icon={MapPin} color="green" loading={isLoading} />
          <StatusCard title="Websites" value={uniqueWebsites} icon={Globe} color="blue" loading={isLoading} />
        </div>
      </section>

      {/* Recent users */}
      <section aria-label="Recent users">
        <h2 className="font-heading text-base font-semibold text-white mb-4">Recent Users</h2>
        <div className="rounded-xl border border-white/[0.06] bg-[#12121e] overflow-hidden">
          {isLoading ? (
            <div className="p-6 space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-9 w-9 animate-pulse rounded-full bg-white/[0.06]" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-32 animate-pulse rounded bg-white/[0.06]" />
                    <div className="h-2 w-48 animate-pulse rounded bg-white/[0.04]" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="px-5 py-3 text-left text-xs font-medium text-white/40 uppercase tracking-wider">User</th>
                    <th className="px-5 py-3 text-left text-xs font-medium text-white/40 uppercase tracking-wider hidden sm:table-cell">Company</th>
                    <th className="px-5 py-3 text-left text-xs font-medium text-white/40 uppercase tracking-wider hidden md:table-cell">City</th>
                    <th className="px-5 py-3 text-left text-xs font-medium text-white/40 uppercase tracking-wider hidden lg:table-cell">Website</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.slice(0, 5).map((user) => (
                    <tr key={user.id} className="border-b border-white/[0.03] last:border-0 transition-colors hover:bg-white/[0.02]">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8505B]/10 text-[#E8505B] text-xs font-bold flex-shrink-0">
                            {user.name.charAt(0)}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-white truncate">{user.name}</p>
                            <p className="text-xs text-white/40 truncate">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 hidden sm:table-cell">
                        <span className="text-sm text-white/60">{user.company.name}</span>
                      </td>
                      <td className="px-5 py-3.5 hidden md:table-cell">
                        <span className="text-sm text-white/60">{user.address.city}</span>
                      </td>
                      <td className="px-5 py-3.5 hidden lg:table-cell">
                        <span className="text-sm text-[#5B8DEF]">{user.website}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
