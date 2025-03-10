const chunk = (array, n, balanced) => {
  if (n < 2) return [array];

  var len = array.length,
    out = [],
    i = 0,
    size;

  if (len % n === 0) {
    size = Math.floor(len / n);
    while (i < len) {
      out.push(array.slice(i, (i += size)));
    }
  } else if (balanced) {
    while (i < len) {
      size = Math.ceil((len - i) / n--);
      out.push(array.slice(i, (i += size)));
    }
  } else {
    n--;
    size = Math.floor(len / n);
    if (len % size === 0) size--;
    while (i < size * n) {
      out.push(array.slice(i, (i += size)));
    }
    out.push(array.slice(size * n));
  }

  return out;
};

export { chunk };
