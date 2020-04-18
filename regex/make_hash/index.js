/* eslint-disable prefer-const */
/**
 *
 * @param {string} S
 */
function makeHash(S) {
  // find letter what comes after a space and make it uppercase
  let re = /[^a-z]./gi;
  let x = S.replace(re, x => x.toUpperCase());
  re = /\s/g;
  let xx = x.replace(re, '');
  re = /.\!$/g;
  let xxx = xx.replace(re, '');
  re = /([a-z])/;
  let xxxx = xxx.replace(re, `#$1`);
  return xxxx;
}

const string = 'make me in to hash tag with camelcase if you can.!';

console.log(makeHash(string));
