export const sayingHi = (s: string) => {
  const re = /^[hH][Ii]\s[^(d|D)]/;
  const apa = s.slice(0, 4);

  return re.test(apa) && s;
};

export const string = 'Hi Alex how are you doing';
export const string2 = 'Ho Bobo';

console.log(sayingHi(string));
console.log(sayingHi(string2));
