import { body } from 'express-validator';
import { createCustomValidatorMiddleware } from './general.validator.js';

export const validateRegister = createCustomValidatorMiddleware([
  body('username').notEmpty().withMessage('Имя пользователя не может быть пустым'),
  body('email').isEmail().withMessage('Неверный формат электронной почты').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Пароль должен содержать минимум 6 символов'),
]);
export const validateLogin = createCustomValidatorMiddleware([
  body('email').isEmail().withMessage('Неверный формат электронной почты').normalizeEmail(),
  body('password').notEmpty().withMessage('Пароль не может быть пустым'),
]);
