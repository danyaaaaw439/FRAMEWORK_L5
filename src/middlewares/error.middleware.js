module.exports = function errorHandler(err, req, res, next) {
    console.error('🔥 Ошибка:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  };
  