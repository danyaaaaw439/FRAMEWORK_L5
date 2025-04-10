const movieService = require('../services/movie.service');

const getAllMovies = async (req, res) => {
  const data = await movieService.getAll();
  res.json(data);
};

const getMovieById = async (req, res) => {
  const id = parseInt(req.params.id);
  const movie = await movieService.getById(id);
  if (movie) res.json(movie);
  else res.status(404).json({ message: 'Movie not found' });
};

const createMovie = async (req, res) => {
  const movie = await movieService.create(req.body);
  res.status(201).json(movie);
};

const updateMovie = async (req, res) => {
  const id = parseInt(req.params.id);
  const updated = await movieService.update(id, req.body);
  if (updated) res.json(updated);
  else res.status(404).json({ message: 'Movie not found' });
};

const deleteMovie = async (req, res) => {
  const id = parseInt(req.params.id);
  const removed = await movieService.remove(id);
  if (removed) res.json({ message: 'Movie deleted' });
  else res.status(404).json({ message: 'Movie not found' });
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
