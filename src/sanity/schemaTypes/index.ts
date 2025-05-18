import { type SchemaTypeDefinition } from 'sanity'

import {tripType} from './tripType'
import {testimonialType} from './testimonialType'
import { pageDetailsType } from './pageDetailsType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [tripType, testimonialType, pageDetailsType],
}
