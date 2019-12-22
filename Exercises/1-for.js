'use strict';

const sum = (...args) => {
  let s = 0;
  for (let i = 0; i < sum.length; i++) {
    s += args[i];
  }
  return s;
};

module.exports = { sum };
