import { type SchemaTypeDefinition } from 'sanity'

import { tripType } from './tripType'
import { testimonialType } from './testimonialType'
import { pageDetailsType } from './pageDetailsType'
import { galleryImagesType } from './galleryType'
import { noticeType } from './noticeType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [tripType, testimonialType, pageDetailsType, galleryImagesType, noticeType],
}
