import readline from 'readline';

process.stdin.setRawMode(true);
readline.emitKeypressEvents(process.stdin);

const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO: make search great again
const search = (input, words) => {
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].indexOf(input) === 0) {
      return words[i];
    }
  }
  return '';
};

const autocomplete = (words) => {
  let searchWord = '';
  // TODO: some odd behaviour on backspace/enter etc...
  process.stdin.on('keypress', (str, key) => {
    if ((key.ctrl && key.name === 'c') || key.name === 'escape') {
      console.log('Exiting...');
      process.exit(0);
    } else if (key.name === 'tab') {
      io.clearLine();
      io.write(search(searchWord, words));
    } else if (key.name === 'return') {
      readline.moveCursor(process.stdout, 0, -1);
      io.clearLine();
      searchWord = '';
    } else if (key.name !== 'backspace') {
      searchWord += str;
    }
  });
};

export default autocomplete;
