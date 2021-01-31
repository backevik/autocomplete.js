import getWords from './source.js';
import autocomplete from './autocomplete.js';

const run = async () => {
  try {
    const words = await getWords();
    autocomplete(words);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();
