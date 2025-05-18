import HeroSection from '@/components/hero-section'
import TestimonialsWrapper from '@/components/testimonial-wrapper'
import CustomTripSection from '@/components/custom-trip-section'
import AboutSection from '@/components/about-section'
import ContactWrapper from '@/components/contact-wrapper'
import TripsWrapper from '@/components/trips-wrapper'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TripsWrapper />
      <TestimonialsWrapper />
      <CustomTripSection />
      <AboutSection />
      <ContactWrapper />
    </>
  )
}
