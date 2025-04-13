import express from 'express';
import AuthController from '../controllers/auth.controller.js';
import { validateRegister, validateLogin } from '../validators/auth.validator.js';

const router = express.Router();

router.post('/register', validateRegister, AuthController.register);

router.post('/login', validateLogin, AuthController.login);

export default router;
