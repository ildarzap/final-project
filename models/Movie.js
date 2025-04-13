import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    releaseYear: { type: Number },
    imageUrl: { type: String },
    watchlists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Watchlist' }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  },
);

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
