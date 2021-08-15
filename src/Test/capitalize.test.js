const capitalize = require('./capitalize');

test('is capital Y in Yes', () => {
  expect(capitalize('yes')).toBe('Yes');
});
