import { body, param } from 'express-validator';
import { createCustomValidatorMiddleware } from './general.validator.js';

export const validateCreateWatchlist = createCustomValidatorMiddleware([
  body('name').notEmpty().withMessage('Название обязательно'),
  body('user').isMongoId().withMessage('Необходим валидный ID пользователя'),
  body('movies').optional().isArray().withMessage('Поле movies должно быть массивом'),
  body('movies.*')
    .optional()
    .isMongoId()
    .withMessage('Каждый ID фильма должен быть валидным MongoID'),
]);

export const validateUpdateWatchlist = createCustomValidatorMiddleware([
  param('watchlistId').isMongoId().withMessage('Неверный ID списка'),
  body('name').optional().isString().withMessage('Название должно быть строкой'),
  body('movies').optional().isArray().withMessage('Поле movies должно быть массивом'),
  body('movies.*')
    .optional()
    .isMongoId()
    .withMessage('Каждый ID фильма должен быть валидным MongoID'),
]);

export const validateWatchlistId = createCustomValidatorMiddleware([
  param('watchlistId').isMongoId().withMessage('Неверный ID списка'),
]);
