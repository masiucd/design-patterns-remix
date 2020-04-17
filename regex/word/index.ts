const matchWord = (str: string) => {
  // const reg = /\w{,3}\W\w{,10}\W\w{,3}/gi;
  const reg = /\w{3}\W{1}\w{1,10}\W\w{3}/gi;
  // return str.match(reg);
  return reg.test(str);
};

const string = 'aaa*aaaaaaaaaa*aaa';
const string2 = 'www.hackerrank.co';
// const string = 'aaa*';
const x = matchWord(string2);
console.log(x);
