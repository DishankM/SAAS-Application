"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { useAuth } from "@/lib/auth"
import { Sun, Moon, Check } from "lucide-react"

interface ProfileSettings {
  displayName: string
  email: string
  bio: string
}

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const { user } = useAuth()
  const [mounted, setMounted] = useState(false)
  const [saved, setSaved] = useState(false)
  const [profile, setProfile] = useState<ProfileSettings>({
    displayName: "",
    email: "",
    bio: "",
  })

  useEffect(() => {
    setMounted(true)
    const savedProfile = localStorage.getItem("squid_profile")
    if (savedProfile) {
      try {
        setProfile(JSON.parse(savedProfile))
      } catch {
        // use defaults
      }
    } else if (user) {
      setProfile({
        displayName: user.name,
        email: user.email,
        bio: "",
      })
    }
  }, [user])

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    localStorage.setItem("squid_profile", JSON.stringify(profile))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="max-w-2xl space-y-8">
      {/* Profile section */}
      <section aria-label="Profile settings">
        <h2 className="font-heading text-base font-semibold text-white mb-1">Profile</h2>
        <p className="text-sm text-white/40 mb-6">Update your personal information.</p>

        <form onSubmit={handleSave} className="space-y-5">
          <div>
            <label htmlFor="settings-name" className="block text-sm font-medium text-white/70 mb-2">
              Display Name
            </label>
            <input
              id="settings-name"
              type="text"
              value={profile.displayName}
              onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
              className="w-full rounded-xl border border-white/[0.08] bg-[#12121e] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-[#E8505B]/50 focus:outline-none focus:ring-1 focus:ring-[#E8505B]/50 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="settings-email" className="block text-sm font-medium text-white/70 mb-2">
              Email Address
            </label>
            <input
              id="settings-email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full rounded-xl border border-white/[0.08] bg-[#12121e] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-[#E8505B]/50 focus:outline-none focus:ring-1 focus:ring-[#E8505B]/50 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="settings-bio" className="block text-sm font-medium text-white/70 mb-2">
              Bio
            </label>
            <textarea
              id="settings-bio"
              rows={4}
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              className="w-full rounded-xl border border-white/[0.08] bg-[#12121e] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-[#E8505B]/50 focus:outline-none focus:ring-1 focus:ring-[#E8505B]/50 transition-colors resize-none"
              placeholder="Tell us about yourself..."
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="rounded-lg bg-[#E8505B] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#d44450] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a12]"
            >
              Save Changes
            </button>
            {saved && (
              <span className="flex items-center gap-1.5 text-sm text-[#4AE2A0]">
                <Check className="h-4 w-4" />
                Saved
              </span>
            )}
          </div>
        </form>
      </section>

      {/* Appearance section */}
      <section aria-label="Appearance settings" className="border-t border-white/[0.06] pt-8">
        <h2 className="font-heading text-base font-semibold text-white mb-1">Appearance</h2>
        <p className="text-sm text-white/40 mb-6">Customize how the app looks and feels.</p>

        {mounted && (
          <div className="flex gap-3">
            <button
              onClick={() => setTheme("dark")}
              className={`flex items-center gap-3 rounded-xl border px-5 py-4 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B] ${
                theme === "dark"
                  ? "border-[#E8505B]/50 bg-[#E8505B]/10 text-white"
                  : "border-white/[0.08] bg-[#12121e] text-white/50 hover:border-white/[0.15] hover:text-white"
              }`}
              aria-pressed={theme === "dark"}
            >
              <Moon className="h-4 w-4" />
              Dark
            </button>
            <button
              onClick={() => setTheme("light")}
              className={`flex items-center gap-3 rounded-xl border px-5 py-4 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B] ${
                theme === "light"
                  ? "border-[#E8505B]/50 bg-[#E8505B]/10 text-white"
                  : "border-white/[0.08] bg-[#12121e] text-white/50 hover:border-white/[0.15] hover:text-white"
              }`}
              aria-pressed={theme === "light"}
            >
              <Sun className="h-4 w-4" />
              Light
            </button>
          </div>
        )}
      </section>

      {/* Danger zone */}
      <section aria-label="Danger zone" className="border-t border-white/[0.06] pt-8">
        <h2 className="font-heading text-base font-semibold text-[#E8505B] mb-1">Danger Zone</h2>
        <p className="text-sm text-white/40 mb-4">Irreversible actions.</p>
        <button
          onClick={() => {
            localStorage.removeItem("squid_profile")
            setProfile({ displayName: user?.name || "", email: user?.email || "", bio: "" })
          }}
          className="rounded-lg border border-[#E8505B]/20 bg-[#E8505B]/5 px-5 py-2.5 text-sm font-medium text-[#E8505B] hover:bg-[#E8505B]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B]"
        >
          Reset Profile
        </button>
      </section>
    </div>
  )
}
