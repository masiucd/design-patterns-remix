/* eslint-disable prefer-const */

function angryProfessor(k: number, a: number[]) {
  // let studentsAccepted = 0;
  // for (let time of a) {
  //   if (time >= 0) studentsAccepted += 1;
  // }
  // return studentsAccepted < k ? 'NO' : 'YES';
  let xs = a.filter(x => x <= 0);
  return xs.length >= k ? 'NO' : 'YES';
}

console.log(angryProfessor(3, [-1, -3, 4, 2])); // NO
// console.log(angryProfessor(2, [-1, -3, 4, 2])); // YES

// k: the threshold number of students
// For the first test case, . The professor wants at least students in attendance,

// a: an array of integers representing arrival times
