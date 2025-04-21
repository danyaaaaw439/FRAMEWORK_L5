const Framework = require('./core/app');
const app = new Framework();

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/user', (req, res) => {
  res.json({ message: 'GET запрос', query: req.query });
});

app.post('/create', (req, res) => {
  res.json({ message: 'POST запрос', body: req.body });
});

app.put('/update', (req, res) => {
  res.send('Обновление PUT выполнено');
});

app.patch('/edit', (req, res) => {
  res.send('Частичное обновление PATCH выполнено');
});

app.delete('/delete', (req, res) => {
  res.send('Удаление DELETE выполнено');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
});