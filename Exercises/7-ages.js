'use strict';

const ages = persons => {
  let res = {};
  for (let person in persons) {
    res[person] = persons[person].died - persons[person].born;
  }
  return res;
};

module.exports = { ages };
