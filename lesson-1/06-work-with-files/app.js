const fs = require('node:fs/promises');

const replaceText = async () => {
  fs.writeFile('./files/file.txt', 'Welcome to Node.js');
  console.log('Done');
};

replaceText();

/*
const addText = async () => {
  fs.appendFile('./files/file.txt', '\nI like Node.js');
  console.log('Done');
};

addText();
*/

/*
const readFile = async () => {
  const text = await fs.readFile('./files/file.txt', 'utf-8');

  // const buffer = await fs.readFile('./files/file.txt');
  // const text = buffer.toString();
  console.log(text);
};

readFile();
*/

// fs.readFile('./files/file.txt')
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fs.readFile('./files/file.txt', (error, data) => {
//   console.log(error);
//   console.log(data);
// });
