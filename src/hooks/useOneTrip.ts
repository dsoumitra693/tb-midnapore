import { client } from "@/sanity/lib/client"
import { Trip } from "@/types"

export const fetchTrip = async (
  id: string
) => {
  const query = `
    *[_type == "trip" && _id == $id] {
      _id,
      title,
      image {
        asset-> {
          url
        },
        alt
      },
      startDate,
      endDate,
      durationDays,
      durationNights,
      actualCost,
      discountedCost,
      meals,
      inclusions,
      itinerary,
      description,
      features
    }
  `

  const params: Record<string, string> = {
    id,
  }

  try {
    const res = await client.fetch(query, params)
    return res[0] as Trip
  } catch (error) {
    console.error('Error fetching trip:', error)
    return null
  }
}