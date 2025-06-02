import { client } from "@/sanity/lib/client"
import { Notice } from "@/types"

export const fetchNotices = async ({
  searchText = '',
  offset = 0,
  limit = 6
}: {
  searchText?: string
  offset?: number
  limit?: number
}) => {
  const isSearching = searchText.trim().length > 0

  const baseFilter = `_type == "notice"`
  const searchFilter = isSearching ? `&& title match $searchText` : ``

  const query = `
    *[${baseFilter} ${searchFilter}]
    | order(date desc, title asc)
    [$offset...$offset + $limit] {
      _id,
      type,
      title,
      message,
      date,
      actionText,
      actionLink,
      dismissible
    }
  `

  const params: Record<string, number | string> = {
    offset,
    limit,
  }

  if (isSearching) {
    params.searchText = `${searchText}*`
  }

  let res = await client.fetch(query, params)
  res = res.map((notice: {_id:string}) => ({
    ...notice,
    id: notice._id,
  }))

  return res as Notice[]
}
