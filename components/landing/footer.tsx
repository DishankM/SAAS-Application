import Link from "next/link"
import  SquidLogo  from "../../public/Vector.png"

const footerLinks = [
  { title: "Sections", links: ["Home", "Section One", "Section Two", "Section Three"] },
  { title: "", links: ["Home", "Section One", "Section Two", "Section Three"] },
  { title: "", links: ["Home", "Section One", "Section Two", "Section Three"] },
]

export function Footer() {
  return (
    <footer className="w-full bg-[#121214] text-white font-sans">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          
          {/* Brand/About */}
          <div className="max-w-xs">
            <Link href="/" className="inline-block mb-6" aria-label="Squid home">
              <img src={SquidLogo.src} alt="Squid Logo" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              A good design is not only aesthetically pleasing, but also functional. 
              It should be able to solve the problem
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-24">
            {footerLinks.map((group, i) => (
              <div key={i}>
                {/* Maintain alignment even if title is empty */}
                <h3 className="mb-6 text-sm font-semibold tracking-wider h-5">
                  {group.title}
                </h3>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="/"
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            All Rights Reserved Inkyy.com 2022
          </p>
          
          <div className="flex items-center gap-4">
            {/* Twitter */}
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all hover:bg-white/10 hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.85.38-1.78.64-2.73.76 1-.6 1.76-1.54 2.12-2.67-.93.55-1.96.95-3.06 1.17a4.77 4.77 0 00-8.14 4.35A13.56 13.56 0 013.1 4.9a4.77 4.77 0 001.48 6.37 4.73 4.73 0 01-2.16-.6v.06a4.78 4.78 0 003.83 4.68 4.76 4.76 0 01-2.16.08 4.78 4.78 0 004.46 3.31A9.57 9.57 0 012 20.5a13.5 13.5 0 007.32 2.14c8.78 0 13.58-7.28 13.58-13.58 0-.21 0-.42-.01-.62A9.72 9.72 0 0024 4.56a9.55 9.55 0 01-2.74.75z" /></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all hover:bg-white/10 hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0z" /></svg>
            </a>
            {/* Discord/Custom Icon */}
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all hover:bg-white/10 hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.68 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.862-1.297 1.197-1.99a.076.076 0 00-.041-.105 13.11 13.11 0 01-1.872-.89.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.077.077 0 01.08-.012c3.922 1.793 8.18 1.793 12.061 0a.077.077 0 01.08.012c.12.099.246.197.373.291a.077.077 0 01-.006.127 12.299 12.299 0 01-1.874.89.077.077 0 00-.041.106c.34.693.74 1.362 1.202 1.99a.078.078 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 00-.031-.03z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}