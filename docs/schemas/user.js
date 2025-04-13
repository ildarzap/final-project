const userSchema = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      description: 'Уникальный идентификатор пользователя',
      example: '661abc1234567890fedcba98',
    },
    username: {
      type: 'string',
      description: 'Имя пользователя',
      example: 'john_doe',
    },
    email: {
      type: 'string',
      description: 'Электронная почта пользователя',
      example: 'john@example.com',
    },
    password: {
      type: 'string',
      description: 'Захешированный пароль',
      example: '$2b$10$hashedpasswordstring',
    },
    watchlist: {
      type: 'array',
      description: 'Список ID списков просмотра',
      items: {
        type: 'string',
        example: '662abc1234567890fedcba01',
      },
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      example: '2024-04-10T12:34:56.789Z',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      example: '2024-04-11T09:12:45.123Z',
    },
  },
};

export default userSchema;
