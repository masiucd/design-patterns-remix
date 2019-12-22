/**
 *
 * @param {number[]} grades
 */
function gradingStudents(grades) {
  const multiplyByFive = x => x % 5 === 0;
  const res = [];
  for (let i = 0; i < grades.length; i++) {
    // console.log(grades[i]);
    console.log(multiplyByFive(grades[i]));
    if (multiplyByFive(grades[i])) {
      res.push(grades[i]);
    }
  }

  console.log(res);
}

console.log(gradingStudents([4, 73, 67, 38, 33, 45]));
