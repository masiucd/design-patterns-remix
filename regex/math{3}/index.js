/**
 *
 * @param {string} S
 */
function regex(S) {
  // const re = /\d{1,3}[a-zA-z]{1,}[.\\]{0,3}$/g;
  const re = /^[0-9]{1,2}[a-zA-Z]{3,}[\\.]{0,3}$/;
  return S.match(re);
}

console.log(regex('32threeormorealphabets')); // true
console.log(regex('3threeormorealphabets.')); // true
console.log(regex('12sacsacACSASACS..')); // true
console.log(
  regex('3threeormorealphabetsACNSDNPINQCPIQNCPNQPCINQPICNPIQNCPQINCQPC..')
); // true
