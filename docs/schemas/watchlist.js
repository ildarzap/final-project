const watchlistSchema = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
    },
    name: {
      type: 'string',
      description: 'Название списка избранного',
      example: 'Мои любимые фильмы',
    },
    user: {
      type: 'string',
      description: 'ID пользователя, которому принадлежит список',
      example: '60d21b4667d0d8992e610c85',
    },
    movies: {
      type: 'array',
      description: 'Список ID фильмов',
      items: {
        type: 'string',
        example: '60d21b5567d0d8992e610c86',
      },
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'Дата создания',
      example: '2023-01-01T00:00:00.000Z',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Дата последнего обновления',
      example: '2023-01-02T00:00:00.000Z',
    },
  },
};

export default watchlistSchema;
