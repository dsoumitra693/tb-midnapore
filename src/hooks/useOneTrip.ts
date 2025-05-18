import { client } from "@/sanity/lib/client"
import { Trip } from "@/types"
import { useEffect, useState } from "react"

const fetchTrip = async (
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

  return client.fetch(query, params)
}

export default function useOneTrip(id: string) {
  const [trip, setTrip] = useState<Trip | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const getTrip = async () => {
      try {
        const data = await fetchTrip(id as string)
        setTrip(data[0])
        setLoading(false)
      } catch (error) {
        setError(error as Error)
        setLoading(false)
      }
    }

    getTrip()
  }, [id])


  return { trip, loading, error }
}