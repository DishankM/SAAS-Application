"use client"
import apc from '../../public/Group 133.png'

import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  })

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Blurred background accents */}
      <div className="pointer-events-none absolute left-[10%] top-[10%] h-32 w-32 rounded-full bg-white/10 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[45%] h-40 w-40 rounded-full bg-white/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        
        {/* Left Side: Wireframe Globe */}
        <div className="relative flex justify-center lg:justify-start">
          <img src={apc.src} alt="Wireframe Globe" />
        </div>

        {/* Right Side: Form Content */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
              Get In Touch
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-gray-400">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem
            </p>
          </div>

          <form
            className="flex flex-col space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              console.log(formData)
            }}
          >
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-md bg-[#111218] px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/20"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md bg-[#111218] px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/20"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <textarea
              placeholder="Name" 
              className="w-full rounded-md bg-[#111218] px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/20 resize-none"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />

            <div className="pt-2">
              <button
                type="submit"
                className="inline-block rounded-md bg-gradient-to-r from-[#F793B0] to-[#8C62F5] px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
              >
                Get in Touch
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
