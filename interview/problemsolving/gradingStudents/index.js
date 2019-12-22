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

// console.log(gradingStudents([4, 73, 67, 38, 33, 45]));

/**
 *
 * @param {number[]} grades
 */
function gradingStudents2(grades) {
  const roundedGrades = grades.map(x => {
    const finalResults = [];
    const diff = multiplyByFive(x);
    const finalGrade = diff + x;
    if (diff < 3 && finalGrade >= 40) {
      finalResults.push(finalGrade);
    } else {
      finalResults.push(x);
    }
    return finalResults;
  });
  return roundedGrades.flat();
}

console.log(gradingStudents2([4, 73, 67, 38, 33, 45]));
