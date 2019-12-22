/**
 *
 * @param {number} x
 * @returns {number}
 */
const multiplyByFive = x => {
  let counter = 0;
  while (x % 5 !== 0) {
    x += 1;
    counter += 1;
  }
  return counter;
};

/**
 *
 * @param {number[]} grades
 */
function gradingStudents(grades) {
  const roundedGrades = [];
  for (let i = 0; i < grades.length; i++) {
    const difference = multiplyByFive(grades[i]);
    const result = difference + grades[i];
    if (difference < 3 && result >= 40) {
      roundedGrades.push(result);
    } else {
      roundedGrades.push(grades[i]);
    }
  }
  return roundedGrades;
}

console.log(gradingStudents([4, 73, 67, 38, 33, 45]));
