import Review from '../models/Review.js';
import Movie from '../models/Movie.js';

class ReviewController {
  async createReview(req, res) {
    try {
      const { user, movie, rating, comment } = req.body;
      const existingReview = await Review.findOne({ user, movie });

      if (existingReview) {
        return res.status(400).json({ message: 'Вы уже оставили отзыв для этого фильма' });
      }
      const newReview = new Review({ user, movie, rating, comment });
      await newReview.save();
      await Movie.findByIdAndUpdate(movie, { $push: { reviews: newReview._id } }, { new: true });
      res.status(201).json(newReview);
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при создании отзыва', error });
    }
  }
  async getReviewsByMovie(req, res) {
    try {
      const { movieId } = req.params;

      if (!movieId) {
        return res.status(400).json({ message: 'Не указан ID фильма' });
      }

      const reviews = await Review.find({ movie: movieId }).populate('user movie');

      if (reviews.length === 0) {
        return res.status(404).json({ message: 'Отзывы для этого фильма не найдены' });
      }

      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при получении отзывов', error });
    }
  }
  async updateReview(req, res) {
    try {
      const { reviewId } = req.params;
      const { rating, comment } = req.body;

      const updatedReview = await Review.findByIdAndUpdate(
        reviewId,
        { rating, comment },
        { new: true },
      );

      if (!updatedReview) {
        return res.status(404).json({ message: 'Отзыв не найден' });
      }

      res.status(200).json(updatedReview);
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при обновлении отзыва', error });
    }
  }
  async deleteReview(req, res) {
    const { reviewId } = req.params;

    try {
      const review = await Review.findById(reviewId);
      if (!review) {
        return res.status(404).json({ message: 'Отзыв не найден' });
      }

      await Movie.findByIdAndUpdate(review.movie, { $pull: { reviews: review._id } });

      await Review.findByIdAndDelete(reviewId);

      res.status(200).json({ message: 'Отзыв удалён' });
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при удалении отзыва', error });
    }
  }
}

export default new ReviewController();
