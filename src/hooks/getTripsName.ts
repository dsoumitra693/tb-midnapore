import { client } from "@/sanity/lib/client"

export const fetchTripsName = async () => {
  const query = `
    * [_type == "trip"]
    | order(startDate asc)
    [0...3] {
      _id,
      title,
    }
  `

  return client.fetch(query)
}
