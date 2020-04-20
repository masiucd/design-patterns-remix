import { countS, x, xx, xxx } from '../many_times_is_is';

describe('testing count IS functions', () => {
  test('should return 5', () => {
    expect(countS(x)).toEqual(5);
    expect(countS(xx)).toEqual(1);
    expect(countS(xxx)).toEqual(undefined);
  });
});
