/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/**
 *
 * @param {number} n   pages in the book
 * @param {number} p page to turn to
 * @returns {number}
 */
const drawingBook = (n, p) => Math.floor(Math.min(p / 2, (n / 2) - p / 2));

console.log(drawingBook(6, 2));

/**
 *
    n: the number of pages in the book
    p: the page number to turn to

 */
