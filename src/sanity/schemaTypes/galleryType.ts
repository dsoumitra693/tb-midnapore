import { defineField, defineType } from 'sanity'

export const galleryImagesType = defineType({
  name: 'galleryImages',
  title: 'Gallery Images',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Gallery Items',
      type: 'array',
      of: [
        // Image item
        defineField({
          name: 'imageItem',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
              validation: (Rule) => Rule.required().min(5).max(200),
            }),
          ],
          validation: (Rule) => Rule.required(),
        }),
        // Video item
        defineField({
          name: 'videoItem',
          title: 'Video',
          type: 'file',
          options: { accept: 'video/*' },
          fields: [
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
              validation: (Rule) => Rule.required().min(5).max(200),
            }),
          ],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
})
