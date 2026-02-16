"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth"
import { SquidLogo } from "@/components/landing/squid-logo"
import { Eye, EyeOff, Loader2 } from "lucide-react"

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { signup } = useAuth()
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (!name || !email || !password) {
      setError("Please fill in all fields.")
      return
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.")
      return
    }

    setLoading(true)
    try {
      const success = await signup(name, email, password)
      if (success) {
        router.push("/dashboard")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-[#0a0a12]">
      {/* Left decorative panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center">
        <div className="pointer-events-none absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-[#7B4AE2]/15 blur-[120px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#E8505B]/10 blur-[100px]" aria-hidden="true" />
        <div className="relative z-10 text-center px-12">
          <SquidLogo className="h-16 w-16 mx-auto mb-6" />
          <h2 className="font-heading text-3xl font-bold text-white">Join Squid</h2>
          <p className="mt-3 text-white/40 text-sm leading-relaxed max-w-sm mx-auto">
            Create your free account and start building beautiful designs today.
          </p>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <SquidLogo className="h-7 w-7" />
            <span className="text-white font-heading text-lg font-bold">Squid</span>
          </div>

          <h1 className="font-heading text-2xl font-bold text-white">Create your account</h1>
          <p className="mt-2 text-sm text-white/40">
            Already have an account?{" "}
            <Link href="/login" className="text-[#E8505B] hover:text-[#d44450] transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B] rounded-sm">
              Sign in
            </Link>
          </p>

          {error && (
            <div className="mt-4 rounded-lg bg-[#E8505B]/10 border border-[#E8505B]/20 px-4 py-3 text-sm text-[#E8505B]" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="signup-name" className="block text-sm font-medium text-white/70 mb-2">
                Full name
              </label>
              <input
                id="signup-name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-white/[0.08] bg-[#12121e] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-[#E8505B]/50 focus:outline-none focus:ring-1 focus:ring-[#E8505B]/50 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-white/70 mb-2">
                Email address
              </label>
              <input
                id="signup-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/[0.08] bg-[#12121e] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-[#E8505B]/50 focus:outline-none focus:ring-1 focus:ring-[#E8505B]/50 transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-white/70 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-white/[0.08] bg-[#12121e] px-4 py-3 pr-11 text-sm text-white placeholder:text-white/25 focus:border-[#E8505B]/50 focus:outline-none focus:ring-1 focus:ring-[#E8505B]/50 transition-colors"
                  placeholder="Min. 6 characters"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B] rounded-sm"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#E8505B] py-3 text-sm font-medium text-white transition-all hover:bg-[#d44450] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8505B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a12]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating account...
                </span>
              ) : (
                "Create account"
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-white/25">
            By creating an account, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}
