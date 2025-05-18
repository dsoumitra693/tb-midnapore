import { client } from "@/sanity/lib/client"

export default async function fetchPageDetailsContactUs() {
  const query = `
    *[_type == "pageDetails"]
    | order(_createdAt desc)
    [0] {
      contactsection {
        phone,
        email,
        whatsapp,
        location {
          name,
          googleMapLink
        }
      }
    }
  `

  return await client.fetch(query)
}
