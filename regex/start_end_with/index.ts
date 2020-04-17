function regEx(S: string) {
  const re = /^\d\w{4}.$/g;
  return re.test(S);
}

console.log(regEx('2aaaaaa.'));
console.log(regEx('10aaaa.'));
// Xxxxx.
// X = digit
// x = word
// word ahs to be exactly 6 chars long
// S must strart with X
