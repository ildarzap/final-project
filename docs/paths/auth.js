const authPaths = {
  '/auth/register': {
    post: {
      summary: 'Регистрация нового пользователя',
      tags: ['Auth'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                username: {
                  type: 'string',
                  example: 'john_doe',
                },
                email: {
                  type: 'string',
                  description: 'Email пользователя',
                  example: 'john@example.com',
                },
                password: {
                  type: 'string',
                  description: 'Пароль (будет захеширован)',
                  example: 'Qwerty123!',
                },
              },
              required: ['username', 'email', 'password'],
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Пользователь успешно зарегистрирован',
        },
        409: {
          description: 'Почта уже используется',
        },
        500: {
          description: 'Ошибка на сервере',
        },
      },
    },
  },
  '/auth/login': {
    post: {
      summary: 'Вход пользователя',
      tags: ['Auth'],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                  description: 'Email пользователя',
                  example: 'john@example.com',
                },
                password: {
                  type: 'string',
                  description: 'Пароль',
                  example: 'Qwerty123!',
                },
              },
              required: ['email', 'password'],
            },
          },
        },
      },
      responses: {
        200: {
          description: 'JWT токен возвращён',
        },
        404: {
          description: 'Неверный e-mail или пароль',
        },
        500: {
          description: 'Ошибка на сервере',
        },
      },
    },
  },
};

export default authPaths;
