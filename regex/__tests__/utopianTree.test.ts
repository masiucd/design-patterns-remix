import { utopianNumber } from '../utopianNumber/index';

test('should return true', () => {
  expect(utopianNumber('abc012333ABCDEEEE')).toEqual('VALID');
});
