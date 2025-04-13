const reviewPaths = {
  '/reviews': {
    post: {
      summary: 'Создать новый отзыв',
      tags: ['Reviews'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                user: {
                  type: 'string',
                  description: 'ID пользователя',
                  example: '67f10989e207faf7f0812fe1',
                },
                movie: {
                  type: 'string',
                  description: 'ID фильма',
                  example: '67f28c74025df4dcc3b16d80',
                },
                rating: {
                  type: 'number',
                  description: 'Оценка фильма от 1 до 10',
                  example: 9,
                },
                comment: {
                  type: 'string',
                  description: 'Комментарий к фильму',
                  example: 'Отличный фильм, рекомендую!',
                },
              },
              required: ['user', 'movie', 'rating'],
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Отзыв успешно создан',
        },
        400: {
          description: 'Ошибка валидации данных',
        },
      },
    },
    get: {
      summary: 'Получить все отзывы',
      tags: ['Reviews'],
      responses: {
        200: {
          description: 'Список всех отзывов',
        },
      },
    },
  },
  '/reviews/{id}': {
    get: {
      summary: 'Получить отзыв по ID',
      tags: ['Reviews'],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'string' },
          description: 'ID отзыва',
        },
      ],
      responses: {
        200: {
          description: 'Отзыв найден',
        },
        404: {
          description: 'Отзыв не найден',
        },
      },
    },
    put: {
      summary: 'Обновить отзыв по ID',
      tags: ['Reviews'],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'string' },
          description: 'ID отзыва',
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                rating: {
                  type: 'number',
                  example: 10,
                },
                comment: {
                  type: 'string',
                  example: 'Лучший фильм всех времён!',
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Отзыв успешно обновлён',
        },
        404: {
          description: 'Отзыв не найден',
        },
      },
    },
    delete: {
      summary: 'Удалить отзыв по ID',
      tags: ['Reviews'],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'string' },
          description: 'ID отзыва',
        },
      ],
      responses: {
        200: {
          description: 'Отзыв удалён',
        },
        404: {
          description: 'Отзыв не найден',
        },
      },
    },
  },
};

export default reviewPaths;
