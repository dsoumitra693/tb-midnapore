import { client } from "@/sanity/lib/client"

export default async function fetchPageDataAbout() {
  const query = `
    *[_type == "pageDetails"]
    | order(_createdAt desc)
    [0] {
      aboutsection {
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
  return data?.aboutsection || null
}