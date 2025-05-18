import { client } from "@/sanity/lib/client"

export const fetchPageDetailsFooter = async () => {
  const query = `
    *[_type == "pageDetails"]
    | order(_createdAt desc)
    [0] {
        title,
        subtitle,
       contactsection {
        phone,
        email,
        location,
        youtube,
        facebook,
        instagram,
        whatsapp,
        whatsappgroup
}
    }
  `

  return client.fetch(query)
}
