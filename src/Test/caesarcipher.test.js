const encrypt = require('./caesarcipher');

test('Encrypts august with key 5', () => {
  expect(encrypt('august', 5)).toBe('fzlzxy');
});

test('Encrypts AuGuSt with key 5 - test case sesitive', () => {
  expect(encrypt('AuGuSt', 5)).toBe('fzlzxy');
});

test('Encrypts august with key 6 - test wrapping z to a', () => {
  expect(encrypt('august', 6)).toBe('gamayz');
});

test('Encrypts august with key 6 - test white space and punctuation', () => {
  expect(encrypt('august is the warmest month!', 6)).toBe(
    'gamayz oy znk cgxskyz sutzn!'
  );
});
