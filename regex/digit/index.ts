const mathReg = (str: string) => {
  const re = /^\d{2}\D\d{2}\D\d{4}/g;

  return str.match(re);
  // return re.test(str);
};

const x = '11..11.2015'; // false;
const y = '11.11.2015'; // true;
const z = '10a10.2015452254'; // true

console.log(mathReg(x));
console.log(mathReg(y));
console.log(mathReg(z));
