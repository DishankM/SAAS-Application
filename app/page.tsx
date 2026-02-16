import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { GuideSection } from "@/components/landing/guide-section"
import { CompaniesSection } from "@/components/landing/companies-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <div className="landing-bg min-h-screen overflow-x-hidden">
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <GuideSection />
        <CompaniesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
