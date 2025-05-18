import { client } from "@/sanity/lib/client"

export async function fetchPageDataNavbar() {
    const query = `
      *[_type == "pageDetails"]
      | order(_createdAt desc)
      [0] {
        title,
        subtitle
      }
    `

    return await client.fetch(query)
}