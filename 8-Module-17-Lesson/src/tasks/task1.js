/**
 * Create new file and add to file any text
 * Read file and return text
 */
const fs = require('fs');
const path = require('path');

console.log(__dirname);

const filename = path.join(__dirname, 'file.txt');
const options = {
  encoding: 'utf8',
};

const writeFile = txt => fs.writeFileSync(filename, txt, options);

const readFile = () => fs.readFileSync(filename, options);

module.exports = {
  writeFile,
  readFile,
};
