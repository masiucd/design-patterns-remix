/**
 *
 * @param {string} S
 */
function regex(S) {
  const re = /^[0-9]{2,}[a-z]*[A-Z]*$/;
  return re.test(S);
}

console.log(regex('22asasASDAS'));
