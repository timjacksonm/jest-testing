const operate = require('./calculate');

test('Adds 5 + 5', () => {
  expect(operate['add'](5, 5)).toBe(10);
});
test('Subtracts 15 - 7', () => {
  expect(operate['subtract'](15, 7)).toBe(8);
});
test('Multiply 25 * 25', () => {
  expect(operate['multiply'](25, 25)).toBe(625);
});
test('Divides 24 / 6', () => {
  expect(operate['divide'](24, 6)).toBe(4);
});
