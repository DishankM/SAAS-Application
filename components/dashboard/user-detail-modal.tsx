"use client"

import { X, Mail, Phone, Globe, Building2, MapPin } from "lucide-react"
import { useEffect, useRef } from "react"

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

interface UserDetailModalProps {
  user: User | null
  onClose: () => void
}

export function UserDetailModal({ user, onClose }: UserDetailModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (user) {
      closeButtonRef.current?.focus()
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose()
      }
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
      return () => {
        document.removeEventListener("keydown", handleEsc)
        document.body.style.overflow = ""
      }
    }
  }, [user, onClose])

  if (!user) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`User details for ${user.name}`}
    >
      <div className="w-full max-w-lg rounded-2xl border border-white/[0.08] bg-[#12121e] shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8505B]/15 text-[#E8505B] text-lg font-bold flex-shrink-0">
              {user.name.charAt(0)}
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold text-white">{user.name}</h2>
              <p className="text-sm text-white/40">@{user.username}</p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B]"
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DetailItem icon={Mail} label="Email" value={user.email} />
            <DetailItem icon={Phone} label="Phone" value={user.phone} />
            <DetailItem icon={Globe} label="Website" value={user.website} />
            <DetailItem icon={Building2} label="Company" value={user.company.name} />
            <DetailItem
              icon={MapPin}
              label="Address"
              value={`${user.address.street}, ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`}
              fullWidth
            />
          </div>

          {/* Company details */}
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.04] p-4">
            <h3 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-2">Company Info</h3>
            <p className="text-sm text-white/70 italic">{`"${user.company.catchPhrase}"`}</p>
            <p className="mt-1 text-xs text-white/40">{user.company.bs}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-white/[0.06]">
          <button
            onClick={onClose}
            className="rounded-lg bg-white/[0.06] px-5 py-2 text-sm font-medium text-white hover:bg-white/[0.1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

function DetailItem({
  icon: Icon,
  label,
  value,
  fullWidth,
}: {
  icon: typeof Mail
  label: string
  value: string
  fullWidth?: boolean
}) {
  return (
    <div className={fullWidth ? "sm:col-span-2" : ""}>
      <div className="flex items-center gap-2 mb-1">
        <Icon className="h-3.5 w-3.5 text-white/30" />
        <span className="text-xs font-medium text-white/40 uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-sm text-white/80 break-words">{value}</p>
    </div>
  )
}
