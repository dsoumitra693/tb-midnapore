import { defineField, defineType} from 'sanity'

export const pageDetailsType = defineType({
  name: 'pageDetails',
  title: 'Page Details',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required().min(5).max(100)
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    }),
    defineField({
      name: 'herosection',
      type: 'object',
      title: 'Hero Section',
      validation: Rule => Rule.required(),
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: Rule => Rule.required().min(5).max(100)
        }),
        defineField({
          name: 'description',
          type: 'string',
          title: 'Description',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            })
          ],
          validation: Rule => Rule.required()
        })
      ]
    }),
    defineField({
      name: 'aboutsection',
      type: 'object',
      title: 'About Section',
      validation: Rule => Rule.required(),
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: Rule => Rule.required().min(5).max(100)
        }),
        defineField({
          name: 'description',
          type: 'string',
          title: 'Description',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            })
          ],
          validation: Rule => Rule.required()
        })
      ]
    }),
    defineField({
      name: 'contactsection',
      type: 'object',
      title: 'Contact Section',
      validation: Rule => Rule.required(),
      fields: [
        defineField({
          name: 'phone',
          type: 'string',
          title: 'Phone',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'email',
          type: 'string',
          title: 'Email',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'whatsapp',
          type: 'string',
          title: 'Whatsapp',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'facebook',
          type: 'string',
          title: 'Facebook',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'whatsappgroup',
          type: 'string',
          title: 'Whatsapp Group',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'instagram',
          type: 'string',
          title: 'Instagram',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'youtube',
          type: 'string',
          title: 'Youtube',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'location',
          type: 'object',
          title: 'Location',
          validation: Rule => Rule.required(),
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Name',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'googleMapLink',
              type: 'string',
              title: 'Google Map Link',
              validation: Rule => Rule.required()
            })
          ]
        })
      ]
    })
  ]
})
