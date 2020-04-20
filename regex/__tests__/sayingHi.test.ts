import { sayingHi, string, string2 } from '../saying_hi';

describe('testing say hi', () => {
  test('should return a string', () => {
    expect(sayingHi(string)).toEqual(string);
  });
  test('should return false', () => {
    expect(sayingHi(string2)).toBe(false);
  });
});
