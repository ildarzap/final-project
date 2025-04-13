import express from 'express';
import UserController from '../controllers/user.controller.js';
import { authUser } from '../middlewares/auth.middleware.js';
import { validateGetUserById } from '../validators/user.validator.js';

const router = express.Router();

router.get('/me', authUser, UserController.getMe);

router.get('/:id', validateGetUserById, UserController.getUserById);

router.put('/me', authUser, UserController.updateUser);

router.delete('/me', authUser, UserController.deleteUser);

export default router;
