
import Box from "../../public/box.png"
import Layers from '../../public/layer.png'
import Circle from '../../public/Group.png'
import Type from '../../public/letter.png'
import Scissors from '../../public/Group 155.png'
import Monitor from '../../public/pencil.png'

export function FeaturesSection() {
  const features = [
    { icon: Box, gradient: false },
    { icon: Layers, gradient: false },
    { icon: Circle, gradient: true }, // Card with the unique gradient icon
    { icon: Type, gradient: false },
    { icon: Scissors, gradient: false },
    { icon: Monitor, gradient: false }
  ]

  return (
    <section className="bg-black px-4 py-10 font-sans">
      <div className="mx-auto max-w-6xl">

        {/* Header - Left Aligned */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-[48px] font-bold text-white tracking-tight">
            Feature Boxes
          </h2>
          <p className="mt-4 text-white/65 text-[18px] leading-relaxed max-w-lg">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>
        </div>

        {/* Grid - Exact 350x371 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, i) => {
            const Icon = feature.icon

            return (
              <div
                key={i}
                className="
                  w-[360px]
                  h-[371px]
                  bg-[#18181C]
                  rounded-[30px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-12
                  border border-white/[0.02]
                  transition-transform duration-300
                  hover:scale-[1.02]
                "
              >
                {/* Icon wrapper - 88x88 rounded container */}
                <div
                  className="mb-10"
                    
                >
                  <img
                    src={feature.icon.src}
                    alt={`Feature ${i + 1}`}
                    className="h-25 w-25 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[22px] font-semibold text-white mb-4">
                  Fully Customizable
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-[1.6] text-white/50 max-w-[280px]">
                  A good design is not only aesthetically pleasing, but also
                  functional. It should be able to solve the problem
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}