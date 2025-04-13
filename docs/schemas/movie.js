const movieSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      description: 'Название фильма',
      example: 'The Matrix',
    },
    genre: {
      type: 'string',
      description: 'Жанр фильма',
      example: 'Science Fiction',
    },
    releaseYear: {
      type: 'number',
      description: 'Год выпуска',
      example: 1999,
    },
    imageUrl: {
      type: 'string',
      description: 'Ссылка на изображение постера фильма',
      example: 'https://example.com/poster.jpg',
    },
    watchlists: {
      type: 'array',
      description: 'Списки избранного, содержащие фильм',
      items: {
        type: 'string',
        format: 'objectId',
        example: '60d21b4667d0d8992e610c85',
      },
    },
    reviews: {
      type: 'array',
      description: 'Отзывы на фильм',
      items: {
        type: 'string',
        format: 'objectId',
        example: '60d21b9967d0d8992e610c88',
      },
    },
  },
  required: ['title', 'genre'],
};

export default movieSchema;
