import { param } from 'express-validator';
import { createCustomValidatorMiddleware } from './general.validator.js';

export const validateGetUserById = createCustomValidatorMiddleware([
  param('id').isMongoId().withMessage('Неверный формат ID пользователя'),
]);
