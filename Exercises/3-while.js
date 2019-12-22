'use strict';

const sum = (...args) => {
  let i = args.length - 1;
  let sum = 0;
  while (i >= 0) {
    sum += args[i];
    i--;
  }
  return sum;
};

module.exports = { sum };
