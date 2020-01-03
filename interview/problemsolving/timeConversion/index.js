/* eslint-disable prefer-const */
/**
 *
 * @param {string} s
 * @returns {string}
 */
function timeConversion(s) {
  const timeArr = s.slice(0, 8).split(':');
  const [hh, mm, ss] = timeArr;
  const pmOreAm = s.slice(8);
  let newHour = parseInt(hh);
  if (pmOreAm === 'PM') {
    newHour += 12;
  }

  return [`${newHour.toString()}:${mm}:${ss}`].join('');
}

/**
 *
 * @param {string} s
 * @returns {string}
 */
function timeConversion2(s) {
  let timeArr = s.slice(0, 8).split(':');
  let [hours, min, sec] = timeArr;
  let pmOrAm = s.slice(8);
  if (hours === '12' && pmOrAm === 'AM') {
    return `00:${min}:${sec}`;
  }
  if (hours !== '12' && pmOrAm === 'PM') {
    return `${Number(hours) + 12}:${min}:${sec}`;
  }
  return `${hours}:${min}:${sec}`;
}

console.log(timeConversion2('07:05:45PM')); // 19:05:45
// console.log(timeConversion2('07:05:45AM')); // 07:05:45
// console.log(timeConversion2('02:05:45PM')); // 14:05:45

/**
 * Given a time in 12 -hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock,
 and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock,
  and 12:00:00 on a 24-hour clock.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

s: a string representing time in 12  hour format


 Sample Input 0
07:05:45PM

output
19:05:45
 *
 */
