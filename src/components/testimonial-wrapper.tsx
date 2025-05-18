import TestimonialsSection from "./testimonials";
import { getTestimonials } from "@/hooks/getTestimonials";

export default async function TestimonialWrapper() {
  const testimonials = await getTestimonials()
  if (!testimonials) return null
  return <TestimonialsSection testimonials={testimonials} />;
}