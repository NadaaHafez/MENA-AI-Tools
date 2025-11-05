import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
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
      name: 'icon',
      type: 'string',
    }),

    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
