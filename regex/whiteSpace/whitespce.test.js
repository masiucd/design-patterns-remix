const { regex } = require('./index');

test('should return correct boolean', () => {
  expect(regex('122 23 56')).toBe(true);
  expect(regex('122     23 56')).toBe(false);
});
