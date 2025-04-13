import User from '../models/User.js';

class UserController {
  async getMe(req, res) {
    try {
      const user = await User.findById(req.userId).populate('watchlist');
      if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id).populate('watchlist');
      if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        req.userId,
        { username, email, password },
        { new: true },
      );
      if (!updatedUser) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.userId);
      if (!deletedUser) {
        return res.status(404).json({ message: 'Пользователь не найден' });
      }
      res.json({ message: 'Пользователь удалён' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();
