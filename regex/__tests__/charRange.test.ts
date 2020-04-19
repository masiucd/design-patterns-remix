/* eslint-disable import/no-unresolved */
import { charRange } from '../char_range';

test('char range should return true', () => {
  expect(charRange('q9$?WWe')).toBe(true);
  expect(charRange('h4CkRank')).toBe(true);
});
test('char range should return false', () => {
  expect(charRange('2q9$?WWe')).toBe(false);
  expect(charRange('h4ckRank')).toBe(false);
});

describe('apa', () => {
  it('should ', () => {
    const w = '2q9$?WWe';
    expect(charRange(w)).toBe(false);
  });
});
