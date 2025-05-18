import { client } from "@/sanity/lib/client"

export default async function fetchPageDataHero() {
  const query = `
    *[_type == "pageDetails"]
    | order(_createdAt desc)
    [0] {
      herosection {
        title,
        description,
        image {
          asset-> {
            url
          }
        }
      }
    }
  `

  const data = await client.fetch(query)
  return data?.herosection || null
}
