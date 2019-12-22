'use strict';

const max = matrix => {
  return Math.max(...matrix.reduce( (acc, current) => {
    acc.push(Math.max(...current));
    return acc;
  } , []));
};

module.exports = { max };
