const average = (array) => array.reduce((a, b) => a + b) / array.length;

const min = (array) => array.sort((a, b) => a - b)[0];

const max = (array) => array.sort((a, b) => a - b)[array.length - 1];

const length = (array) => array.length;

const analyze = (array) => ({
  average: average(array),
  min: min(array),
  max: max(array),
  length: length(array),
});
module.exports = analyze;
