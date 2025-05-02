import * as fs from 'node:fs/promises'; // const fs = require('node:fs/promises');
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function readMovies() {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);
  const filePath = path.join(dirname, 'movies.txt'); // path.join(import.meta.dirname, 'movies.txt')

  return fs.readFile(filePath, { encoding: 'utf-8' });
}

// module.exports = {
//   readMovies,
// };
