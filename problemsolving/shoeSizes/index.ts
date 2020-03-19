/* eslint-disable prefer-const */
interface IPeople {
  alex: number;
  tina: number;
  mia: number;
  boris: number;
  sven: number;
}
const shoeSizes = (peopleMap: IPeople) => {
  const showSizeArray = Object.values(peopleMap);
  let max = 0;
  let mostFrequent;

  const map = showSizeArray.reduce((obj, val) => {
    if (obj[val]) {
      obj[val] += 1;
    } else {
      obj[val] = 1;
    }
    return obj;
  }, {});

  for (let i = 0; i < showSizeArray.length; i++) {
    if (max < map[showSizeArray[i]]) {
      max = map[showSizeArray[i]];
      mostFrequent = showSizeArray[i];
    }
  }
  return mostFrequent;
};

const people: IPeople = {
  alex: 32,
  tina: 29,
  mia: 28,
  boris: 41,
  sven: 32,
};

console.log(shoeSizes(people));
