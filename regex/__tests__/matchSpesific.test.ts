/* eslint-disable import/no-unresolved */
import { mathSpecific } from '../match_spesific';

describe('testing mathSpecific regex', () => {
  test('should return false when pass in 300as', () => {
    expect(mathSpecific('300as"')).toBe(false);
  });
  test('should return true', () => {
    expect(mathSpecific('300as.')).toBe(true);
  });
});
