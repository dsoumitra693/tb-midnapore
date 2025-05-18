import HeroSection from '@/components/hero-section'
import TestimonialsWrapper from '@/components/testimonial-wrapper'
import CustomTripSection from '@/components/custom-trip-section'
import AboutSection from '@/components/about-section'
import ContactWrapper from '@/components/contact-wrapper'
import TripSection from '@/components/trip-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TripSection />
      <TestimonialsWrapper />
      <CustomTripSection />
      <AboutSection />
      <ContactWrapper />
    </>
  )
}
