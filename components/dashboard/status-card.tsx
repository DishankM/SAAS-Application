import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatusCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  color: "coral" | "purple" | "green" | "blue"
  loading?: boolean
}

const colorMap = {
  coral: { bg: "bg-[#E8505B]/10", text: "text-[#E8505B]", icon: "text-[#E8505B]" },
  purple: { bg: "bg-[#7B4AE2]/10", text: "text-[#7B4AE2]", icon: "text-[#7B4AE2]" },
  green: { bg: "bg-[#4AE2A0]/10", text: "text-[#4AE2A0]", icon: "text-[#4AE2A0]" },
  blue: { bg: "bg-[#5B8DEF]/10", text: "text-[#5B8DEF]", icon: "text-[#5B8DEF]" },
}

export function StatusCard({ title, value, icon: Icon, color, loading }: StatusCardProps) {
  const colors = colorMap[color]

  return (
    <article className="rounded-xl border border-white/[0.06] bg-[#12121e] p-5 transition-colors hover:border-white/[0.1]">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-white/40 uppercase tracking-wider">{title}</p>
          {loading ? (
            <div className="mt-2 h-8 w-20 animate-pulse rounded bg-white/[0.06]" />
          ) : (
            <p className={cn("mt-2 text-2xl font-bold font-heading", colors.text)}>{value}</p>
          )}
        </div>
        <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", colors.bg)}>
          <Icon className={cn("h-5 w-5", colors.icon)} />
        </div>
      </div>
    </article>
  )
}
