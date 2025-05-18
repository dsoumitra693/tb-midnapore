import { client } from "@/sanity/lib/client"
import { ITestimonial } from "@/types";

export const getTestimonials = async () => {
    
    const query = `*[_type == "testimonial"] {
      _id,
      name,
      location,
      "avatarUrl": avatar.asset->url,
      text
    }`
    
    const testimonials = await client.fetch(query)

    return testimonials as ITestimonial[]
}
