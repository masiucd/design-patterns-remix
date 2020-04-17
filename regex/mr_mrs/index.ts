function regEx(s: string) {
  const re = /^(Mr|Mrs|Dr|Er|Ms)\.([a-zA-Z])+$/gm;
  return re.test(s);
}

console.log(regEx('Mr.Smith'));
console.log(regEx('Mr#DOSHI')); // false
console.log(regEx('Ms._underscore')); // false
// must start with Mr., Mrs., Ms., Dr. or Er.
