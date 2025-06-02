import { defineType, defineField } from 'sanity'

export const noticeType = defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Notice Type',
      type: 'string',
      options: {
        list: [
          { title: 'Information', value: 'info' },
          { title: 'Warning', value: 'warning' },
          { title: 'Success', value: 'success' },
          { title: 'Announcement', value: 'announcement' },
        ],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'actionText',
      title: 'Button Text (Optional)',
      type: 'string',
      description: 'Text to display on the action button (e.g., "Learn More")',
    }),
    defineField({
      name: 'actionLink',
      title: 'Button Link (Optional)',
      type: 'url',
      description: 'URL to open when the action button is clicked',
    }),
    defineField({
      name: 'dismissible',
      title: 'Can Be Dismissed?',
      type: 'boolean',
      initialValue: true,
      description: 'If enabled, users can close this notice.',
    }),
  ],
  initialValue: {
    date: new Date().toISOString(),
  },
})
