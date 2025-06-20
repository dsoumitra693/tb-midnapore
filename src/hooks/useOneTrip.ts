import { client } from "@/sanity/lib/client"
import { Trip, PriceTier } from "@/types"

export const fetchTrip = async (id: string): Promise<Trip | null> => {
  const query = `
    *[_type == "trip" && _id == $id][0] {
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
      meals,
      inclusions,
      exclusions,
      itinerary,
      description,
      features,
      actualCost,
      discountedCost,
      priceTiers[] {
        peopleCount,
        label,
        originalPrice,
        currentPrice
      }
    }
  `

  try {
    const trip = await client.fetch(query, { id })

    const enrichedPriceTiers: PriceTier[] = trip.priceTiers && trip.priceTiers.length > 0 ?trip.priceTiers.map((tier: PriceTier) => ({
      ...tier,
      perPersonPrice: tier.currentPrice / tier.peopleCount
    })) : []


    return {
      ...trip,
      actualCost: trip.actualCost || (enrichedPriceTiers.length > 0 ? enrichedPriceTiers[0].currentPrice : 0),
      discountedCost: trip.discountedCost || (enrichedPriceTiers.length > 0 ? enrichedPriceTiers[0].originalPrice : 0),
      priceTiers: enrichedPriceTiers
    } as Trip
  } catch (error) {
    console.error('Error fetching trip:', error)
    return null
  }
}
