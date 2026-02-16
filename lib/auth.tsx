"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { useRouter } from "next/navigation"

interface AuthContextType {
  isAuthenticated: boolean
  user: { email: string; name: string } | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ email: string; name: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("squid_token")
    const savedUser = localStorage.getItem("squid_user")
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser))
        setIsAuthenticated(true)
      } catch {
        localStorage.removeItem("squid_token")
        localStorage.removeItem("squid_user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = useCallback(async (email: string, _password: string) => {
    await new Promise((r) => setTimeout(r, 800))
    const fakeUser = { email, name: email.split("@")[0] }
    localStorage.setItem("squid_token", "fake-jwt-token-" + Date.now())
    localStorage.setItem("squid_user", JSON.stringify(fakeUser))
    setUser(fakeUser)
    setIsAuthenticated(true)
    return true
  }, [])

  const signup = useCallback(async (name: string, email: string, _password: string) => {
    await new Promise((r) => setTimeout(r, 800))
    const fakeUser = { email, name }
    localStorage.setItem("squid_token", "fake-jwt-token-" + Date.now())
    localStorage.setItem("squid_user", JSON.stringify(fakeUser))
    setUser(fakeUser)
    setIsAuthenticated(true)
    return true
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem("squid_token")
    localStorage.removeItem("squid_user")
    setUser(null)
    setIsAuthenticated(false)
    router.push("/login")
  }, [router])

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}
