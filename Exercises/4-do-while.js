'use strict';

const sum = (...args) => {
  let i = args.length-1;
  let sum = 0;
  do {
    console.log('i: ', i);
    sum += args[i];
    i--;
  } while (i >= 0);
  return sum;
};

module.exports = { sum };
