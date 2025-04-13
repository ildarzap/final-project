import { body } from 'express-validator';
import { createCustomValidatorMiddleware } from './general.validator.js';

export const validateMovie = createCustomValidatorMiddleware([
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Название обязательно')
    .isLength({ min: 1, max: 100 })
    .withMessage('Название должно быть от 1 до 100 символов'),

  body('genre').notEmpty().withMessage('Жанр обязателен'),

  body('releaseYear')
    .notEmpty()
    .withMessage('Год выпуска обязателен')
    .isInt({ min: 1888, max: new Date().getFullYear() + 2 })
    .withMessage(`Год выпуска должен быть в пределах от 1888 до ${new Date().getFullYear() + 2}`),

  body('imageUrl')
    .optional()
    .isURL()
    .withMessage('Ссылка на изображение должна быть корректным URL'),
]);
