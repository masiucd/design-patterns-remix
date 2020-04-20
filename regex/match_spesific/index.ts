export const mathSpecific = (S: string) => {
  const re = /^[123][120][xs0][30Aa][xsu][\.\,]$/;
  return re.test(S);
};

const x = '300as"'; // false
console.log(mathSpecific(x));
