const watchlistPaths = {
  '/watchlists': {
    post: {
      summary: 'Создать новый список избранного',
      tags: ['Watchlist'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  example: 'Избранное',
                },
                user: {
                  type: 'string',
                  example: '67f10989e207faf7f0812fe1',
                },
                movies: {
                  type: 'array',
                  items: {
                    type: 'string',
                    example: '67f28bdd025df4dcc3b16d7e',
                  },
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Список избранного создан',
        },
      },
    },
    get: {
      summary: 'Получить все списки избранного',
      tags: ['Watchlist'],
      responses: {
        200: {
          description: 'Списки избранного получены',
        },
      },
    },
  },
  '/watchlists/{id}': {
    get: {
      summary: 'Получить список избранного по ID',
      tags: ['Watchlist'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: { type: 'string' },
          description: 'ID списка избранного',
        },
      ],
      responses: {
        200: { description: 'Список найден' },
        404: { description: 'Список не найден' },
      },
    },
    put: {
      summary: 'Обновить список избранного по ID',
      tags: ['Watchlist'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: { type: 'string' },
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  example: 'Новый список',
                },
                movies: {
                  type: 'array',
                  items: {
                    type: 'string',
                    example: '60d21b5567d0d8992e610c86',
                  },
                },
              },
            },
          },
        },
      },
      responses: {
        200: { description: 'Список обновлён' },
        404: { description: 'Список не найден' },
      },
    },
    delete: {
      summary: 'Удалить список избранного по ID',
      tags: ['Watchlist'],
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: { description: 'Список удалён' },
        404: { description: 'Список не найден' },
      },
    },
  },
};

export default watchlistPaths;
