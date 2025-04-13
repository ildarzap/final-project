const userPaths = {
  '/user/me': {
    get: {
      summary: 'Получить информацию о текущем пользователе',
      tags: ['User'],
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: 'Информация о текущем пользователе',
        },
        401: {
          description: 'Пользователь не авторизован',
        },
        404: {
          description: 'Пользователь не найден',
        },
      },
    },
    put: {
      summary: 'Обновить информацию о текущем пользователе',
      tags: ['User'],
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                username: { type: 'string', example: 'newUsername' },
                email: { type: 'string', example: 'new@mail.com' },
                password: { type: 'string', example: 'NewPassword123!' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Информация о пользователе обновлена',
        },
        401: {
          description: 'Пользователь не авторизован',
        },
        404: {
          description: 'Пользователь не найден',
        },
      },
    },
    delete: {
      summary: 'Удалить текущего пользователя',
      tags: ['User'],
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: 'Пользователь успешно удалён',
        },
        401: {
          description: 'Пользователь не авторизован',
        },
        404: {
          description: 'Пользователь не найден',
        },
      },
    },
  },
  '/user/{id}': {
    get: {
      summary: 'Получить пользователя по ID',
      tags: ['User'],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: {
            type: 'string',
            format: 'objectId',
          },
          description: 'ID пользователя',
        },
      ],
      responses: {
        200: {
          description: 'Информация о пользователе',
        },
        400: {
          description: 'Неверный ID',
        },
        404: {
          description: 'Пользователь не найден',
        },
      },
    },
  },
};

export default userPaths;
