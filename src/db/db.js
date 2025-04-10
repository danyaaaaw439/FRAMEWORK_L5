const fs = require('fs');
const path = require('path');

function getFilePath(filename) {
  return path.join(__dirname, filename);
}

async function read(file) {
  const raw = await fs.promises.readFile(getFilePath(file), 'utf-8');
  return JSON.parse(raw);
}

async function write(file, data) {
  await fs.promises.writeFile(getFilePath(file), JSON.stringify(data, null, 2));
}

module.exports = {
  read,
  write,
};
