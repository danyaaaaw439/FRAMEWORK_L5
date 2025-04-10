const Framework = require('./core/app');
const app = new Framework();

// Мидлвары
const logger = require('./src/middlewares/logger.middleware');
app.use(logger);

// Роуты
require('./src/routes/movie.routes')(app);
require('./src/routes/screening.routes')(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Сервер запущен: http://localhost:${PORT}`);
});
