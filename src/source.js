import fs from 'fs';

const toArray = (words) => words.split('\n'); // TODO: break word into AST

const getWords = async () => new Promise((resolve, reject) => fs.readFile('./words.txt', 'utf8', (err, data) => {
  if (err) {
    return reject(err);
  }
  return resolve(toArray(data));
}));

export default getWords;
