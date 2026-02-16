import Link from "next/link"
import monckey from '../../public/monkey.png'
import start from '../../public/hashtag.png'
import wIcon from '../../public/wkd.png'
import icon from '../../public/Vector.png'

export function GuideSection() {
  return (
    <section className="bg-black px-6 py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* LEFT ORBITAL SYSTEM */}
          <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[678px] lg:h-[678px] flex-shrink-0">
            {/* Background Rings */}
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-[12%] rounded-full border border-white/10" />
            <div className="absolute inset-[25%] rounded-full border border-white/10" />
            <div className="absolute inset-[38%] rounded-full border border-white/10" />

            {/* Center Circle & Icon (Slack-style logo) */}
            <div className="absolute left-1/2 top-1/2 w-[110px] h-[110px] lg:w-[154px] lg:h-[154px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1A1C23] flex items-center justify-center shadow-2xl">
              <img src={icon.src} alt="Squid Icon" />
            </div>

            {/* Floating Brand Icons */}
            {/* Orange Icon (Top Left) */}
            <div className="absolute top-[28%] left-[15%] w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-[#FF5722] flex items-center justify-center shadow-lg transform -rotate-12">
               <img src={start.src} alt="Start Icon" />
            </div>

            {/* Yellow Icon (Right) */}
            <div className="absolute top-[35%] right-[11%] w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-[#FFE01B] flex items-center justify-center shadow-lg">
               <img src={monckey.src} alt="Monkey Icon" /> 
            </div>

            {/* Blue Icon (Bottom Left) */}
            <div className="absolute bottom-[22%] left-[24%] w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-[#4A69FF] flex items-center justify-center shadow-lg transform rotate-12">
               <img src={wIcon.src} alt="W Icon" />
            </div>

            {/* Small Ambient Glow Dots */}
            <div className="absolute top-[20%] right-[35%] w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 blur-[1px]" />
            <div className="absolute bottom-[35%] right-[25%] w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 blur-[1px]" />
            <div className="absolute bottom-[45%] left-[12%] w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-600 blur-[1px]" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 lg:max-w-[500px] text-left">
            <h2 className="text-[42px] md:text-[48px] font-bold leading-[1.1] text-white tracking-tight">
              We're here to guide and help you at all times
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-400 max-w-[420px]">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem
            </p>

            <Link
              href="#"
              className="mt-10 inline-block rounded-lg px-10 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#F498AF] to-[#7B4FF3] transition-all hover:opacity-90 active:scale-95"
            >
              Download
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}