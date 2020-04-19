const mathRegex = (str: string) => {
  const re = /^...\....\....\....$/g;
  return re.test(str);
};

const x = mathRegex('1123.456.abc.def');
const y = mathRegex('123.456.abc.def');
// const x = mathRegex('1123');
// 123.456.abc.def true
// 1123.456.abc.def false

console.log(x);
console.log(y);
