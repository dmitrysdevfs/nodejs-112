const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');

const booksPath = path.join(__dirname, 'books.json');

const getAll = async () => {
  const data = await fs.readFile(booksPath);
  return JSON.parse(data);
};

const getById = async (id) => {
  const books = await getAll();
  const result = books.find((item) => item.id === id);
  return result || null;
};

const add = async (data) => {
  const books = await getAll();
  const newBook = {
    id: crypto.randomUUID(), // or Date.now().toString(),
    ...data,
  };
  books.push(newBook);
  await fs.writeFile(booksPath, JSON.stringify(books, undefined, 2));
  return newBook;
};

const updateById = async (id, data) => {
  const books = await getAll();
  const index = books.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }

  books[index] = { id, ...data };
  await fs.writeFile(booksPath, JSON.stringify(books, undefined, 2));
  return books[index];
};

const deleteById = async (id) => {
  const books = await getAll();
  const index = books.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = books.splice(index, 1);
  await fs.writeFile(booksPath, JSON.stringify(books, undefined, 2));
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
};
