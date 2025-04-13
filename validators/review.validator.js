import { body, param } from 'express-validator';
import { createCustomValidatorMiddleware } from './general.validator.js';

export const validateCreateReview = createCustomValidatorMiddleware([
  body('user').isMongoId().withMessage('Необходим валидный ID пользователя'),
  body('movie').isMongoId().withMessage('Необходим валидный ID фильма'),
  body('rating').isInt({ min: 1, max: 10 }).withMessage('Рейтинг должен быть от 1 до 10'),
  body('comment').optional().isString().withMessage('Комментарий должен быть строкой'),
]);

export const validateUpdateReview = createCustomValidatorMiddleware([
  param('reviewId').isMongoId().withMessage('Необходим валидный ID отзыва'),
  body('rating')
    .optional()
    .isInt({ min: 1, max: 10 })
    .withMessage('Рейтинг должен быть от 1 до 10'),
  body('comment').optional().isString().withMessage('Комментарий должен быть строкой'),
]);
