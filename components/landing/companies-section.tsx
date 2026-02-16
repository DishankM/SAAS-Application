import { CTABanner } from "./cta-section"

const companies = [
  { name: "Smile", font: "font-serif italic", size: "text-[36px]" },
  { name: "Urban", font: "font-serif font-black", size: "text-[32px]" },
  { name: "natural", font: "font-sans font-black", size: "text-[28px]" },
  { name: "WAVE", font: "font-serif tracking-widest font-light", size: "text-[24px]" },
  { name: "HAPPY", font: "font-sans tracking-[0.3em] font-medium", size: "text-[22px]" },
  { name: "Alisa", font: "font-serif font-bold", size: "text-[32px]" },
]

export function CompaniesSection() {
  return (
    <section className="bg-black ">
      <div className="">
        
        {/* Main Dark Container */}
        <div className="relative  bg-[#12141D] px-6 pt-24 pb-60 text-center">
          
          <h2 className="text-[48px] md:text-[68px] font-bold leading-[1.1] text-white tracking-tight">
            Companies we Worked
            <br />
            With in Since 2015
          </h2>

          {/* Logo Grid */}
          <div className="mx-auto mt-16 grid max-w-[1100px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex h-[100px] items-center justify-center rounded-2xl bg-black border border-white/5"
              >
                <span className={`${company.font} ${company.size} text-white/20 select-none`}>
                  {company.name}
                </span>
              </div>
            ))}
          </div>

          {/* Floating CTA - Overlapping the bottom border */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-[212px] w-full max-w-[1110px] px-4">
            <CTABanner />
          </div>
        </div>

        {/* Spacer for the overlapping banner */}
        <div className="h-[250px]" />
      </div>
    </section>
  )
}