const { charRange } = require('./index');

test('char range should return true', () => {
  expect(charRange('q9$?WWe')).toBe(true);
  expect(charRange('h4CkRank')).toBe(true);
});
test('char range should return false', () => {
  expect(charRange('2q9$?WWe')).toBe(false);
  expect(charRange('h4ckRank')).toBe(false);
});
