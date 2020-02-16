interface IObj {
  length: number;
  width: number;
  perimeter?: () => number;
}
const Rectangle = (a: number, b: number): void => {
  const permiter = (x: number, y: number): number => 2 * (x + y);
  const area = (c: number, m: number) => c * m;
  console.log(a, b, permiter(a, b), area(a, b));
};

const rec: IObj = {
  length: 4,
  width: 5,
};

console.log(Rectangle(rec.length, rec.width));
