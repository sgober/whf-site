/**
 * Takes in a list, an options key
 * If an array of strings, sort them alphabetically
 * If an array of objects, pass a key and will sort them alphabetically by the key
 */
const alphabetize = (options, key) => {
  return sort(options, key, (a = '', b = '') => a.localeCompare(b));
};

/**
 * Takes in a list, an options key, and a comparator
 * If array of any basic type (string, number, etc.), sort using the comparator
 * If an array of objects, pass a key and will sort by the key using the comparator
 */
const sort = (options, key, comparator) => {
  try {
    if (key) {
      return options.sort((a, b) => {
        return comparator(a[key], b[key]);
      });
    } else {
      return options.sort((a, b) => {
        return comparator(a, b);
      });
    }
  } catch {
    console.error('Failed to sort list');
    return options;
  }
};

export { alphabetize, sort };
