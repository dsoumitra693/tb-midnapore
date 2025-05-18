import { client } from "@/sanity/lib/client"

export const fetchTrips = async ({
  searchText = '',
  offset = 0,
  limit = 6
}: {
  searchText?: string
  offset?: number
  limit?: number
}) => {
  const isSearching = searchText.trim().length > 0

  const baseFilter = `_type == "trip"`
  const searchFilter = isSearching ? `&& title match $searchText` : ``
  const query = `
    *[${baseFilter} ${searchFilter}]
    | order(startDate asc)
    [$offset...$offset + $limit] {
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
      discountedCost
    }
  `

  const params: Record<string, number | string> = {
    offset,
    limit,
  }

  if (isSearching) {
    params.searchText = `${searchText}*`
  }

  return client.fetch(query, params)
}
