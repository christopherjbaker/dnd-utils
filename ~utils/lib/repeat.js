function repeat(times, fn) {
  return '.'.repeat(times).split('').map((_, index) => fn(index));
};

module.exports = repeat;
