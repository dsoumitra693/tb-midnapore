import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { dataset, projectId } from '../env'

const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
    .auto('format') // Use best format (e.g., WebP)
    .fit('max')     // Prevent upscaling
    .quality(90)    // Reduce quality for smaller size
}
