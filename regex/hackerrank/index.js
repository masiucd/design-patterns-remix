/**
 *
 * @param {string} input
 */
function processData(input) {
  const re = /^hackerrank.+/;
  const re2 = /.+hackerrank$/g;
  const re3 = /^hackerrank(.*hackerrank)?$/;

  if (re.test(input)) {
    console.log(1);
  } else if (re2.test(input)) {
    console.log(2);
  } else if (re3.test(input)) {
    console.log(0);
  } else {
    console.log(-1);
  }
}

console.log(processData('i love hackerrank'));
console.log(processData('hackerrank is an awesome place for programmers'));
console.log(processData('hackerrank'));
console.log(processData('i think hackerrank is a great place to hangout'));

// Starts with hackerrank
// Ends with hackerrank
// Start and ends with hackerrank
// For every line,

// Print 1 if the conversation starts with hackerrank
// Print 2 if the conversation ends with hackerrank
// Print 0 if the conversation starts and ends with hackerrank
// Print -1 if none of the above.

// i love hackerrank
// hackerrank is an awesome place for programmers
// hackerrank
// i think hackerrank is a great place to hangout

// 2
// 1
// 0
// -1
