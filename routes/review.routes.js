import express from 'express';
import ReviewController from '../controllers/review.controller.js';
import { validateCreateReview, validateUpdateReview } from '../validators/review.validator.js';

const router = express.Router();

router.post('/', validateCreateReview, ReviewController.createReview);

router.put('/:reviewId', validateUpdateReview, ReviewController.updateReview);

router.get('/:movieId', ReviewController.getReviewsByMovie);
router.delete('/:reviewId', ReviewController.deleteReview);

export default router;
