const ctrl = require('../controllers/screening.controller');

module.exports = function(app) {
  app.get('/api/v1/screenings', ctrl.getAllScreenings);
  app.get('/api/v1/screenings/:id', ctrl.getScreeningById);
  app.post('/api/v1/screenings', ctrl.createScreening);
  app.put('/api/v1/screenings/:id', ctrl.updateScreening);
  app.delete('/api/v1/screenings/:id', ctrl.deleteScreening);
};
