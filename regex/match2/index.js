/**
 *
 * @param {string} S
 */
const match = S => {
  const re = /^[02468A-Za-z]{40}[13579\s]{5}$/;
  return re.test(S);
};

const test1 = '2222222222aaaaaaaaaa2222222222aaaaaaaaaa13 57';

// tester.checker("^[a-zA-Z02468]{40}[13579\\s]{5}$");
