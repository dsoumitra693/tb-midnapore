import TestimonialsWrapper from '@/components/testimonial-wrapper'
import CustomTripSection from '@/components/custom-trip-section'
import AboutSection from '@/components/about-section'
import ContactWrapper from '@/components/contact-wrapper'
import TripSection from '@/components/trip-section'
import HeroWrapper from '@/components/hero-wrapper'

export default function Home() {
  return (
    <>
      <HeroWrapper />
      <TripSection />
      <TestimonialsWrapper />
      <CustomTripSection />
      <AboutSection />
      <ContactWrapper />
    </>
  )
}
