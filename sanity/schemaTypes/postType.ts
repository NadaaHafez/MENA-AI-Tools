import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().error('Required to add Title'),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required().error('Slug is required'),
    }),

    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (rule) => rule.required().error('Date is required'),
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (rule) => rule.required().error(''),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (rule) => rule.required().error('Category is required'),
    }),

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),
  ],
})
