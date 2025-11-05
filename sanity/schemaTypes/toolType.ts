import {defineField, defineType} from 'sanity'

export const toolType = defineType({
  name: 'tool',
  title: 'Tools',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      type: 'slug',
    }),

    defineField({
      name: 'description',
      type: 'string',
    }),

    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
    }),

    defineField({
      name: 'pricing',
      type: 'string',
      options: {
        list: ['paid', 'unpaid'],
        layout: 'radio',
      },
    }),

    defineField({
      name: 'website',
      type: 'url',
    }),

    defineField({
      name: 'features',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),
  ],
})
