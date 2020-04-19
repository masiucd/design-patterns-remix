export const utopianNumber = (S: string) => {
  const re = /^[a-z]{0,3}[0-9]{2,8}[A-Z]{3,}/;
  if (re.test(S)) {
    return 'VALID';
  }
  return 'INVALID';
};

console.log(utopianNumber('abc012333ABCDEEEE'));
console.log(utopianNumber('0123AB'));
