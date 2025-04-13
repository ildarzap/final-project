import mongoose from 'mongoose';

const watchlistSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  },
  { timestamps: true },
);

const Watchlist = mongoose.model('Watchlist', watchlistSchema);
export default Watchlist;
