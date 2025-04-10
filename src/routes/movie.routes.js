const movieController = require('../controllers/movie.controller');

module.exports = function(app) {
  app.get('/api/v1/movies', movieController.getAllMovies);
  app.get('/api/v1/movies/:id', movieController.getMovieById);
  app.post('/api/v1/movies', movieController.createMovie);
  app.put('/api/v1/movies/:id', movieController.updateMovie);
  app.delete('/api/v1/movies/:id', movieController.deleteMovie);
};
