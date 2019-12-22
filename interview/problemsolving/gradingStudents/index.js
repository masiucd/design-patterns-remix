/**
 *
 * @param {number[]} grades
 */
function gradingStudents(grades) {
  const calulatedGrades = grades.filter(grade => grade >= 40);
  const multiplyByFive = x => x % 5 === 0;
}

console.log(gradingStudents([4, 73, 67, 38, 33]));
