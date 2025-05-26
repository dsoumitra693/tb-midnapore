import { defineType, defineField, defineArrayMember } from 'sanity'

export const tripType = defineType({
  name: 'trip',
  title: 'Trip',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required().min(5).max(100)
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
    }),
    defineField({
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'endDate',
      type: 'date',
      title: 'End Date',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'durationDays',
      type: 'number',
      title: 'Duration (Days)',
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'durationNights',
      type: 'number',
      title: 'Duration (Nights)',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'actualCost',
      type: 'number',
      title: 'Actual Cost',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'discountedCost',
      type: 'number',
      title: 'Discounted Cost',
      validation: Rule => Rule.min(0)
    }),
    defineField({
      name: 'itinerary',
      type: 'array',
      title: 'Itinerary',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'day',
              type: 'string',
              title: 'Day',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'details',
              type: 'array',
              title: 'Details',
              of: [{ type: 'string' }],
              validation: Rule => Rule.required().min(1)
            })
          ],
          validation: Rule => Rule.required()
        })
      ],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'meals',
      type: 'array',
      title: 'Meal',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'inclusions',
      type: 'array',
      title: 'Inclusions',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'exclusions',
      type: 'array',
      title: 'Exclusions',
      of: [{ type: 'string' }],
    })
  ],
  initialValue: {
    inclusions: [
      "Fooding",
      "Lodging",
      "Local Transport",
      "Train Ticket",
      "Entry Fees"
    ],
    exclusions: [
      "Anything not mentioned in inclusion list",
      "Meals during Train Journey", 
      "Any kind of personal Expenses",
      "Unscheduled or extended stay due to road blocks, Landslides, Cost of Evacuation in case of emergency."
    ],
  }
})
