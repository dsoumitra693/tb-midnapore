import HeroSection from '@/components/hero-section'
import TripSection from '@/components/trip-section'
import TestimonialsSection from '@/components/testimonials'
import CustomTripSection from '@/components/custom-trip-section'
import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TripSection />
      <TestimonialsSection />
      <CustomTripSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
