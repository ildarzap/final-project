import express from 'express';
import WatchlistController from '../controllers/watchlist.controller.js';
import {
  validateCreateWatchlist,
  validateUpdateWatchlist,
  validateWatchlistId,
} from '../validators/watchlist.validator.js';

const router = express.Router();

router.post('/', validateCreateWatchlist, WatchlistController.createWatchlist);
router.get('/', WatchlistController.getAllWatchlists);
router.get('/:id', validateWatchlistId, WatchlistController.getWatchlistById);
router.put('/:id', validateUpdateWatchlist, WatchlistController.updateWatchlist);
router.delete('/:id', validateWatchlistId, WatchlistController.deleteWatchlist);

export default router;
