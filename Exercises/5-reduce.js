'use strict';

const sum = (...args) => args.reduce( (acc, current) => (acc += current, acc), 0);

module.exports = { sum };
