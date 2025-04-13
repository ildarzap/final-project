const moviePaths = {
  '/movies': {
    post: {
      summary: 'Создать фильм',
      tags: ['Movies'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Movie',
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Фильм успешно создан',
        },
        400: {
          description: 'Ошибка валидации',
        },
      },
    },
    get: {
      summary: 'Получить список всех фильмов',
      tags: ['Movies'],
      responses: {
        200: {
          description: 'Список фильмов',
        },
      },
    },
  },
  '/movies/{id}': {
    get: {
      summary: 'Получить фильм по ID',
      tags: ['Movies'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          description: 'ID фильма',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Фильм найден',
        },
        404: {
          description: 'Фильм не найден',
        },
      },
    },
    put: {
      summary: 'Обновить фильм по ID',
      tags: ['Movies'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          description: 'ID фильма',
          schema: {
            type: 'string',
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Movie',
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Фильм обновлён',
        },
        404: {
          description: 'Фильм не найден',
        },
      },
    },
    delete: {
      summary: 'Удалить фильм по ID',
      tags: ['Movies'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          description: 'ID фильма',
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: {
          description: 'Фильм удалён',
        },
        404: {
          description: 'Фильм не найден',
        },
      },
    },
  },
};

export default moviePaths;
