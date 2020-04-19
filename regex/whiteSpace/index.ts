function regex(s: string) {
  const re = /^\S{2,}\s\S{2}\s\S{2}/;
  return re.test(s);
}

console.log(regex('12 11 15')); // true
console.log(regex('122 23 56')); // true

module.exports = {
  regex,
};
