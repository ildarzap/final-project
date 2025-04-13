import Movie from '../models/Movie.js';

class MovieController {
  async create(req, res) {
    try {
      const movie = await Movie.create(req.body);
      res.status(201).json(movie);
    } catch (err) {
      res.status(500).json({ message: 'Ошибка при создании фильма' });
    }
  }

  async getAll(req, res) {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (err) {
      res.status(500).json({ message: 'Ошибка при получении фильмов' });
    }
  }

  async getOne(req, res) {
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) return res.status(404).json({ message: 'Фильм не найден' });
      res.json(movie);
    } catch (err) {
      res.status(500).json({ message: 'Ошибка при получении фильма' });
    }
  }

  async update(req, res) {
    try {
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!movie) return res.status(404).json({ message: 'Фильм не найден' });
      res.json(movie);
    } catch (err) {
      res.status(500).json({ message: 'Ошибка при обновлении фильма' });
    }
  }

  async remove(req, res) {
    try {
      const movie = await Movie.findByIdAndDelete(req.params.id);
      if (!movie) return res.status(404).json({ message: 'Фильм не найден' });
      res.json({ message: 'Фильм удалён' });
    } catch (err) {
      res.status(500).json({ message: 'Ошибка при удалении фильма' });
    }
  }
}

export default new MovieController();
