import { orderRankField } from "@sanity/orderable-document-list";

const show = {
  name: 'show',
  title: 'Show',
  type: 'document',
  fields: [
    orderRankField({type: 'show'}),
    {
      name: 'title',
      title: 'Show Title',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'e.g. "2024" or "2023–2024"',
    },
    {
      name: 'curator',
      title: 'Curator(s)',
      type: 'string',
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
      description: 'Gallery or space name, e.g. "The Shed"',
    },
    {
      name: 'cityState',
      title: 'City / State',
      type: 'string',
      description: 'e.g. "New York, NY"',
    },
    {
      name: 'artworks',
      title: 'Artworks',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'date',
              title: 'Date',
              type: 'string',
              description: 'e.g. "2024" or "Spring 2025"',
            },
            {
              name: 'medium',
              title: 'Medium',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {title: 'title'},
  },
}

export default show;
