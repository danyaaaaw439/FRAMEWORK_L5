const db = require('../db/db');
const FILE = 'movies.json';

async function getAll() {
  return await db.read(FILE);
}

async function getById(id) {
  const items = await db.read(FILE);
  return items.find(i => i.id === id);
}

async function create(newItem) {
  const items = await db.read(FILE);
  const id = Date.now();
  const item = { id, ...newItem };
  items.push(item);
  await db.write(FILE, items);
  return item;
}

async function update(id, updatedData) {
  const items = await db.read(FILE);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return null;
  items[index] = { ...items[index], ...updatedData };
  await db.write(FILE, items);
  return items[index];
}

async function remove(id) {
  const items = await db.read(FILE);
  const updated = items.filter(i => i.id !== id);
  await db.write(FILE, updated);
  return items.length !== updated.length;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
