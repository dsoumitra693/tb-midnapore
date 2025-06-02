import { useEffect, useState } from 'react'
import { fetchNotices } from './getNotices'
import { Notice } from '@/types';

export const useNotices = ({
  offset = 0,
  limit = 10000,
  searchText = ''
}: {
  offset?: number;
  limit?: number;
  searchText?: string;
}) => {
  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getNotices = async () => {
      try {
        setLoading(true)
        const result = await fetchNotices({ offset, limit, searchText })
        setNotices(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch notices')
      } finally {
        setLoading(false)
      }
    }

    getNotices()
  }, [offset, limit, searchText]) // include dependencies to re-run when changed

  return { notices, loading, error }
}
