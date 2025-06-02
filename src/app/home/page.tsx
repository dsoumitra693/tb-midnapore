import CustomTripSection from '@/components/custom-trip-section'
import AboutSection from '@/components/about-section'
import ContactWrapper from '@/components/contact-wrapper'
import TripSection from '@/components/trip-section'
import HeroWrapper from '@/components/hero-wrapper'
import TestimonialsSection from '@/components/testimonials'
import NoticeSection from '@/components/notice-section'

export default function Home() {
  return (
    <>
      <HeroWrapper />
      <TripSection />
      <NoticeSection/>
      <TestimonialsSection />
      <CustomTripSection />
      <AboutSection />
      <ContactWrapper />
    </>
  )
}
