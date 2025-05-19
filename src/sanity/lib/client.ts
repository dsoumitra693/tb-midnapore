import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, write_token } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: write_token
})
