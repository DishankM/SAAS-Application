"use client"

import { useState, useMemo, useCallback } from "react"
import useSWR from "swr"
import { Search, ArrowUpAZ, ArrowDownAZ, ChevronLeft, ChevronRight, AlertTriangle, Loader2 } from "lucide-react"
import { UserDetailModal } from "@/components/dashboard/user-detail-modal"

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

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch users")
    return res.json()
  })

const ITEMS_PER_PAGE = 5

export default function UsersPage() {
  const { data: users, error, isLoading } = useSWR<User[]>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  )

  const [search, setSearch] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const filteredUsers = useMemo(() => {
    if (!users) return []
    const query = search.toLowerCase().trim()
    let result = users.filter(
      (u) =>
        u.name.toLowerCase().includes(query) ||
        u.email.toLowerCase().includes(query)
    )
    result.sort((a, b) => {
      const compare = a.name.localeCompare(b.name)
      return sortOrder === "asc" ? compare : -compare
    })
    return result
  }, [users, search, sortOrder])

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / ITEMS_PER_PAGE))
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setCurrentPage(1)
  }, [])

  const toggleSort = useCallback(() => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
    setCurrentPage(1)
  }, [])

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E8505B]/10 mb-4">
          <AlertTriangle className="h-6 w-6 text-[#E8505B]" />
        </div>
        <h2 className="font-heading text-lg font-bold text-white">Failed to load users</h2>
        <p className="mt-2 text-sm text-white/40 max-w-sm">
          Something went wrong while fetching the users list. Please check your connection and try again.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="relative flex-1 w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" aria-hidden="true" />
          <label htmlFor="user-search" className="sr-only">Search users by name or email</label>
          <input
            id="user-search"
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={handleSearchChange}
            className="w-full rounded-lg border border-white/[0.08] bg-[#12121e] pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-[#E8505B]/50 focus:outline-none focus:ring-1 focus:ring-[#E8505B]/50 transition-colors"
          />
        </div>
        <button
          onClick={toggleSort}
          className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[#12121e] px-4 py-2.5 text-sm text-white/60 hover:text-white hover:border-white/[0.15] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B]"
          aria-label={`Sort ${sortOrder === "asc" ? "Z to A" : "A to Z"}`}
        >
          {sortOrder === "asc" ? <ArrowUpAZ className="h-4 w-4" /> : <ArrowDownAZ className="h-4 w-4" />}
          <span className="hidden sm:inline">{sortOrder === "asc" ? "A - Z" : "Z - A"}</span>
        </button>
      </div>

      {/* Users table */}
      <div className="rounded-xl border border-white/[0.06] bg-[#12121e] overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-6 w-6 animate-spin text-[#E8505B]" />
          </div>
        ) : paginatedUsers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center px-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.04] mb-3">
              <Search className="h-5 w-5 text-white/20" />
            </div>
            <p className="text-sm font-medium text-white/60">No users found</p>
            <p className="mt-1 text-xs text-white/30">
              {search ? "Try adjusting your search query." : "No users available."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="px-5 py-3 text-left text-xs font-medium text-white/40 uppercase tracking-wider">User</th>
                  <th className="px-5 py-3 text-left text-xs font-medium text-white/40 uppercase tracking-wider hidden sm:table-cell">Company</th>
                  <th className="px-5 py-3 text-left text-xs font-medium text-white/40 uppercase tracking-wider hidden md:table-cell">Phone</th>
                  <th className="px-5 py-3 text-left text-xs font-medium text-white/40 uppercase tracking-wider hidden lg:table-cell">City</th>
                  <th className="px-5 py-3 text-right text-xs font-medium text-white/40 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-white/[0.03] last:border-0 transition-colors hover:bg-white/[0.02]"
                  >
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
                      <span className="text-sm text-white/60">{user.phone}</span>
                    </td>
                    <td className="px-5 py-3.5 hidden lg:table-cell">
                      <span className="text-sm text-white/60">{user.address.city}</span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <button
                        onClick={() => setSelectedUser(user)}
                        className="text-xs font-medium text-[#E8505B] hover:text-[#d44450] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B] rounded-sm px-2 py-1"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {!isLoading && filteredUsers.length > ITEMS_PER_PAGE && (
        <nav className="flex items-center justify-between" aria-label="Pagination">
          <p className="text-xs text-white/40">
            Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
            {Math.min(currentPage * ITEMS_PER_PAGE, filteredUsers.length)} of{" "}
            {filteredUsers.length} users
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:border-white/[0.15] disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B]"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B] ${
                  page === currentPage
                    ? "bg-[#E8505B] text-white"
                    : "border border-white/[0.08] text-white/40 hover:text-white hover:border-white/[0.15]"
                }`}
                aria-current={page === currentPage ? "page" : undefined}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:border-white/[0.15] disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B]"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </nav>
      )}

      {/* User detail modal */}
      <UserDetailModal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  )
}
