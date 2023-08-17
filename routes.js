import express from 'express'
const router = express.Router();
import Movie from './models/movie.js';

router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.send(movies);
  } catch (err) {
    return res.status(500).json({message: err.message});
  }
});

export default router;