const db = require('../db/db');
const FILE = 'screenings.json';

async function getAll() {
  return await db.read(FILE);
}

async function getById(id) {
  const data = await db.read(FILE);
  return data.find(item => item.id === id);
}

async function create(newItem) {
  const data = await db.read(FILE);
  const id = Date.now();
  const item = { id, ...newItem };
  data.push(item);
  await db.write(FILE, data);
  return item;
}

async function update(id, updatedData) {
  const data = await db.read(FILE);
  const index = data.findIndex(item => item.id === id);
  if (index === -1) return null;
  data[index] = { ...data[index], ...updatedData };
  await db.write(FILE, data);
  return data[index];
}

async function remove(id) {
  const data = await db.read(FILE);
  const updated = data.filter(item => item.id !== id);
  await db.write(FILE, updated);
  return data.length !== updated.length;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
