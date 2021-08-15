const analyze = require('./arrayanalyze');

test('Analyze array [1, 8, 3, 4, 2, 6]', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
