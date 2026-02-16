"use client"

import Link from "next/link"
import frame from '../../public/Frame.png'

export function CTABanner() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[1110px]
        h-[425px]
        overflow-hidden
        rounded-[40px]
        bg-gradient-to-r
        from-[#FFA38F]
        via-[#D27BEB]
        to-[#8E5AFA]
        flex
        items-center
        px-12 md:px-24
        z-10
      "
    >
      {/* CONTENT */}
      <div className="relative z-20 max-w-[550px] ">
        <p className="text-white/90 text-lg mb-6 font-medium text-left">
          Love our Our Tool?
        </p>

        <h3 className="text-[48px] font-bold leading-[1.1] text-white text-left tracking-tight gap-4">
          Fell Free to Join our
          <br />
          15 Days Free Trial
        </h3>

        <div className="justify-start items-start leading-[1.5] text-left">
          <button
          className="mt-10 justify-start h-12 items-center rounded-md bg-black px-10 text-base  text-white transition-transform hover:scale-105"
        >
          Download Template
        </button>
        </div>
      </div>

      {/* MAP GRAPHIC */}
      <div className="absolute top-0 right-0 h-full w-full pointer-events-none overflow-hidden">
        <div className="absolute right-[-3%] top-[8%] ">
           
          <img src={frame.src} alt="Frame Graphic" />
        </div>
      </div>
    </div>
  )
}