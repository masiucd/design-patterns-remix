const sum = (n: number[]): number => n.reduce((a, b) => a + b, 0);

const luckyTicket = (n: number): boolean => {
  const r = n
    .toString()
    .split('')
    .map(Number);

  const leftSide = r.slice(0, Math.ceil(r.length / 2));
  const rightSide = r.slice(Math.ceil(r.length / 2));

  return sum(leftSide) === sum(rightSide);
};

console.log(luckyTicket(123006));
