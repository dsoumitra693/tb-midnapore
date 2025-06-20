import { client } from "@/sanity/lib/client"

export const fetchTrips = async ({
  searchText = '',
  offset = 0,
  limit = 6,
  minPrice,
  maxPrice,
  startDateFrom,
  startDateTo,
  tags = []
}: {
  searchText?: string
  offset?: number
  limit?: number
  minPrice?: number
  maxPrice?: number
  startDateFrom?: string
  startDateTo?: string
  tags?: string[]
}) => {
  const isSearching = searchText.trim().length > 0
  const hasPriceFilter = minPrice !== undefined || maxPrice !== undefined
  const hasDateFilter = startDateFrom || startDateTo
  const hasTagsFilter = tags.length > 0

  // Base filter
  const filters = [`_type == "trip"`]

  // Enhanced partial matching for both title and tags
  if (isSearching) {
    const searchWords = searchText.trim().split(/\s+/)
    const searchConditions = searchWords.map((word, index) =>
      `(title match $searchWord${index} || count(tags[@ match $searchWord${index}]) > 0)`
    ).join(' || ')

    filters.push(`(${searchConditions})`)
  }

  // Price filtering
  if (hasPriceFilter) {
    const priceFilters = []
    if (minPrice !== undefined) {
      priceFilters.push(`coalesce(discountedCost, actualCost) >= $minPrice`)
    }
    if (maxPrice !== undefined) {
      priceFilters.push(`coalesce(discountedCost, actualCost) <= $maxPrice`)
    }
    if (priceFilters.length > 0) {
      filters.push(`(${priceFilters.join(' && ')})`)
    }
  }

  // Date filtering
  if (hasDateFilter) {
    const dateFilters = []
    if (startDateFrom) {
      dateFilters.push(`startDate >= $startDateFrom`)
    }
    if (startDateTo) {
      dateFilters.push(`startDate <= $startDateTo`)
    }
    if (dateFilters.length > 0) {
      filters.push(`(${dateFilters.join(' && ')})`)
    }
  }

  // Tags filtering
  if (hasTagsFilter) {
    filters.push(`count(tags[@ in $tags]) > 0`)
  }

  const query = `
    *[${filters.join(' && ')}]
    | order(coalesce(startDate, "9999-12-31") asc, title asc)
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
      discountedCost,
      tags,
      "effectivePrice": coalesce(discountedCost, actualCost)
    }
  `

  const params: Record<string, unknown> = {
    offset: Number(offset),
    limit: Number(limit),
  }

  if (isSearching) {
    const searchWords = searchText.trim().split(/\s+/)
    searchWords.forEach((word, index) => {
      params[`searchWord${index}`] = `*${word}*`
    })
  }

  if (minPrice !== undefined) {
    params.minPrice = Number(minPrice)
  }

  if (maxPrice !== undefined) {
    params.maxPrice = Number(maxPrice)
  }

  if (startDateFrom) {
    params.startDateFrom = startDateFrom
  }

  if (startDateTo) {
    params.startDateTo = startDateTo
  }

  if (hasTagsFilter) {
    params.tags = tags
  }

  try {
    return await client.fetch(query, params)
  } catch (error) {
    console.error('Error fetching trips:', error)
    throw error
  }
}
