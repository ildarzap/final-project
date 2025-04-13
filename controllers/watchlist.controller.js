import Watchlist from '../models/Watchlist.js';
import Movie from '../models/Movie.js';

class WatchlistController {
  async createWatchlist(req, res) {
    try {
      const { name, user, movies } = req.body;

      const newWatchlist = new Watchlist({ name, user, movies });
      await newWatchlist.save();
      await Promise.all(
        movies.map((movieId) =>
          Movie.findByIdAndUpdate(movieId, { $addToSet: { watchlists: newWatchlist._id } }),
        ),
      );

      res.status(201).json(newWatchlist);
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при создании списка', error });
    }
  }

  async getAllWatchlists(req, res) {
    try {
      const watchlists = await Watchlist.find().populate('user').populate('movies');
      res.status(200).json(watchlists);
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при получении списков', error });
    }
  }

  async getWatchlistById(req, res) {
    try {
      const { watchlistId } = req.params;
      const watchlist = await Watchlist.findById(watchlistId).populate('user').populate('movies');

      if (!watchlist) {
        return res.status(404).json({ message: 'Список не найден' });
      }

      res.status(200).json(watchlist);
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при получении списка', error });
    }
  }

  async updateWatchlist(req, res) {
    try {
      const { watchlistId } = req.params;
      const { name, movies } = req.body;

      const updatedWatchlist = await Watchlist.findByIdAndUpdate(
        watchlistId,
        { name, movies },
        { new: true },
      );

      if (!updatedWatchlist) {
        return res.status(404).json({ message: 'Список не найден' });
      }

      res.status(200).json(updatedWatchlist);
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при обновлении списка', error });
    }
  }

  async deleteWatchlist(req, res) {
    try {
      const { watchlistId } = req.params;

      const deletedWatchlist = await Watchlist.findByIdAndDelete(watchlistId);

      if (!deletedWatchlist) {
        return res.status(404).json({ message: 'Список не найден' });
      }
      await Promise.all(
        deletedWatchlist.movies.map((movieId) =>
          Movie.findByIdAndUpdate(movieId, { $pull: { watchlists: deletedWatchlist._id } }),
        ),
      );

      res.status(200).json({ message: 'Список удалён' });
    } catch (error) {
      res.status(500).json({ message: 'Ошибка при удалении списка', error });
    }
  }
}

export default new WatchlistController();
