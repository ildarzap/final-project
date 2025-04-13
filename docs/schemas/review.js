const reviewSchema = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      description: 'Уникальный идентификатор отзыва',
      example: '60d21b9967d0d8992e610c88',
    },
    user: {
      type: 'string',
      format: 'objectId',
      description: 'ID пользователя, оставившего отзыв',
      example: '60d21b4667d0d8992e610c85',
    },
    movie: {
      type: 'string',
      format: 'objectId',
      description: 'ID фильма, к которому относится отзыв',
      example: '60d21b5567d0d8992e610c86',
    },
    rating: {
      type: 'number',
      description: 'Оценка фильма от 1 до 10',
      example: 8,
      minimum: 1,
      maximum: 10,
    },
    comment: {
      type: 'string',
      description: 'Текст отзыва',
      example: 'Фильм отличный, пересматриваю каждый год!',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'Дата создания отзыва',
      example: '2024-04-13T10:20:30Z',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Дата последнего обновления отзыва',
      example: '2024-04-13T11:00:00Z',
    },
  },
  required: ['user', 'movie', 'rating'],
};

export default reviewSchema;
