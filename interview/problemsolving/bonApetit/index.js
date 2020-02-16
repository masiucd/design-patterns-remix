/**
 *
 * @param {number[]} bill
 * @param {number} k // what she don't eat
 * @param {number} b // what he charge her
 * @returns {number|string}
 */
const bill = (bill, k, b) => {
  const theBill = bill.filter((_, i) => i !== k);

  const toPay = theBill.reduce((a, b) => a + b, 0) / 2;

  return toPay % b === 0 ? 'Bon Appetit' : b - toPay;
};
console.log(bill([3, 10, 2, 9], 1, 12)); // 5

console.log(bill([3, 10, 2, 9], 1, 7)); // bon apetit
