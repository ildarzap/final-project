import express from 'express';
import MovieController from '../controllers/movie.controller.js';
import { validateMovie } from '../validators/movie.validator.js';

const router = express.Router();

router.post('/', validateMovie, MovieController.create);

router.get('/', MovieController.getAll);

router.get('/:id', MovieController.getOne);

router.put('/:id', validateMovie, MovieController.update);

router.delete('/:id', MovieController.remove);

export default router;
