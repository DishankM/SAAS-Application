import Link from "next/link";
import logo from '../../public/Vector.png'

export function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#03040a] text-white font-sans">
      {/* Background grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-55"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0) 0, rgba(255,255,255,0) 112px, rgba(255,255,255,0.08) 113px, rgba(255,255,255,0) 114px)",
        }}
      />

      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[64px] h-16 w-16 -translate-x-1/2 rounded-full bg-white/30 blur-2xl" />
        <div className="absolute left-[7%] top-[32%] h-32 w-32 rounded-full bg-[#c2c5dd]/45 blur-3xl" />
        <div className="absolute right-[9%] top-[26%] h-28 w-28 rounded-full bg-[#c2c5dd]/45 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-20 mx-auto flex w-full max-w-[1460px] items-center justify-between px-5 pt-7 sm:px-8 xl:px-14">
        <div className="flex items-center gap-2.5">
          <img src={logo.src} alt="Squid Logo" className="h-10 w-12 " />
          <span className="text-[35px] font-semibold leading-none tracking-[-0.03em]">Squid</span>
        </div>

        <div className="flex items-center gap-5 sm:gap-10">
          <Link href="#" className="hidden text-sm text-white/60 sm:block">
            Home
          </Link>
          <Link
            href="/login"
            className="inline-flex h-11 items-center rounded-lg bg-gradient-to-r from-[#F498AF] to-[#7B4FF3] px-6 text-sm font-medium text-white sm:h-12 sm:px-10 sm:text-base"
          >
            Download Template
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto max-w-[1080px] px-4 pb-14 pt-16 text-center sm:px-6 md:pt-20 lg:pt-24">
        <p className=" text-[82px] font-semibold">
          Beautiful Landing Page
          <br />
          Design for You
        </p>

        <p className="mx-auto mt-6 max-w-[760px] text-[21px] leading-[1.42] text-white/52  text-gray-400">
          A good design is not only aesthetically pleasing, but also
          <br className="hidden sm:block" />
          functional. It should be able to solve the problem
        </p>

        <Link
          href="#download"
          className="mt-9 inline-flex h-12 items-center rounded-lg bg-gradient-to-r from-[#F498AF] to-[#7B4FF3] px-10 text-base font-medium text-white"
        >
          Download Template
        </Link>
      </div>

      {/* Feature Boxes - positioned above the wave */}
      <div className="relative z-20 mx-auto w-full max-w-[1020px] px-3 pb-32 sm:px-6 lg:pb-36">
        <div className="rounded-[34px] border border-white/[0.04] bg-[#0d1118] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.68)] sm:p-8">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.02fr_0.9fr_0.9fr]">
            {/* Left column - Feature Box 1 */}
            <div className="rounded-[22px] bg-[#1d1f2d] p-6 sm:p-7">
              <div className="mx-auto mb-7 h-8 w-8 rounded-full border-2 border-white/15" />
              <div className="mb-7 h-px bg-white/8" />
              <div className="space-y-[18px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={`left-row-${i}`} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-md bg-white/8" />
                    <div className="space-y-1.5">
                      <div className="h-2.5 w-24 rounded-full bg-white/10" />
                      <div className="h-2.5 w-16 rounded-full bg-white/8" />
                    </div>
                    <div className="ml-auto h-2.5 w-10 rounded-full bg-white/10" />
                  </div>
                ))}
              </div>
              <div className="mt-12 flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#F498AF] to-[#7B4FF3] p-[2px]">
                  <div className="h-full w-full rounded-full bg-[#1d1f2d]" />
                </div>
                <div className="h-2.5 w-14 rounded-full bg-white/15" />
                <div className="h-2.5 w-24 rounded-full bg-white/10" />
              </div>
            </div>
            
            {/* Middle column - Feature Box 2 & 3 */}
            <div className="space-y-5">
              {/* Donut chart */}
              <div className="rounded-[22px] bg-[#1d1f2d] p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="space-y-1.5">
                    <div className="h-2.5 w-20 rounded-full bg-white/10" />
                    <div className="h-2.5 w-14 rounded-full bg-white/8" />
                  </div>
                  <div className="h-6 w-6 rounded-md bg-white/10" />
                </div>
                <div className="mx-auto mt-5 h-44 w-44 rounded-full bg-[conic-gradient(from_130deg,_#F498AF_0_35%,_#7B4FF3_35%_63%,_rgba(255,255,255,0.09)_63%_100%)] p-3">
                  <div className="h-full w-full rounded-full bg-[#1d1f2d] p-5">
                    <div className="h-full w-full rounded-full border-[10px] border-white/10" />
                  </div>
                </div>
              </div>

              {/* Bar chart */}
              <div className="rounded-[22px] bg-[#1d1f2d] p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="space-y-1.5">
                    <div className="h-2.5 w-24 rounded-full bg-white/10" />
                    <div className="h-2.5 w-16 rounded-full bg-white/8" />
                  </div>
                  <div className="h-6 w-6 rounded-md bg-white/10" />
                </div>
                <div className="mb-5 h-px bg-white/8" />
                <div className="flex h-28 items-end gap-3">
                  {[46, 28, 38, 50, 62, 70].map((h, i) => (
                    <div
                      key={`bar-${i}`}
                      className="w-6 rounded-full bg-gradient-to-t from-[#7B4FF3] to-[#F498AF]"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Feature Box 4 & 5 */}
            <div className="space-y-5">
              {/* User list with gradient overlay */}
              <div className="relative overflow-hidden rounded-[22px] bg-[#1d1f2d] p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="space-y-1.5">
                    <div className="h-2.5 w-20 rounded-full bg-white/10" />
                    <div className="h-2.5 w-14 rounded-full bg-white/8" />
                  </div>
                  <div className="h-6 w-6 rounded-md bg-white/10" />
                </div>

                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={`user-${i}`} className="mb-4 flex items-center gap-3 border-b border-white/8 pb-4 last:mb-0 last:border-b-0 last:pb-0">
                    <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#F498AF] via-[#f4c47a] to-[#7B4FF3]" />
                    <div className="space-y-1.5">
                      <div className="h-2.5 w-24 rounded-full bg-white/10" />
                      <div className="h-2.5 w-16 rounded-full bg-white/8" />
                    </div>
                    <div className="ml-auto h-2.5 w-14 rounded-full bg-white/10" />
                  </div>
                ))}

                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#1d1f2d] to-transparent" />
              </div>

              {/* Empty placeholder box */}
              <div className="h-[112px] rounded-[22px] bg-[#1d1f2d]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration - positioned at the very bottom, below feature boxes */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[300px] md:h-[400px] lg:h-[524px]">
        <svg viewBox="0 0 1600 440" preserveAspectRatio="none" className="h-full w-full">
          <defs>
            <linearGradient id="squid-wave" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F498AF" />
              <stop offset="100%" stopColor="#7B4FF3" />
            </linearGradient>
          </defs>
          <path
            d="M0 32 C 360 148, 1240 148, 1600 32 L1600 440 C 1240 298, 360 298, 0 440 Z"
            fill="url(#squid-wave)"
          />
        </svg>
      </div>
    </section>
  );
}
