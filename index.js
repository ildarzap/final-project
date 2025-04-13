import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import setupSwagger from './docs/swagger.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import movieRoutes from './routes/movie.routes.js';
import reviewRoutes from './routes/review.routes.js';
import watchlistRoutes from './routes/watchlist.routes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);
app.use('/watchlists', watchlistRoutes);
setupSwagger(app);
app.listen(PORT, () => {
  connectDB();
  console.log(`Сервер запущен на порту ${PORT}`);
});
