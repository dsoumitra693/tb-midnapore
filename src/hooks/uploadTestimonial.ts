import { client } from "@/sanity/lib/client";
import { ITestimonial } from "@/types";

export default async function uploadTestimonial({
    name,
    location,
    text,
}:ITestimonial) {
    try {
        
    const created = await client.create({
        _type: 'testimonial',
        name,
        location,
        text,
        avatar: null
    })

    return created
    } catch (error) {
        console.error(error)
        return false
    }
}
