import { defineType, defineField } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required().min(2).max(50)
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: Rule => Rule.required().min(2).max(50)
    }),
    defineField({
      name: 'avatar',
      type: 'image',
      title: 'Avatar',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'text',
      type: 'text',
      title: 'Testimonial Text',
      rows: 4,
      validation: Rule => Rule.required().min(20).max(500)
    })
  ]
})
