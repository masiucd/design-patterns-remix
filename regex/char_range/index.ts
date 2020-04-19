const charRange = (str: string) => {
  const re = /^[a-z][1-9][^a-z][^A-Z][A-Z].*$/;
  return re.test(str);
};

// console.log(charRange('h4CkRank')); // true
// console.log(charRange('q9$?WWe')); // true

// The string's length is >= 5.
// The first character must be a lowercase English alphabetic character.
// The second character must be a positive digit. Note that we consider zero to be neither positive nor negative.
// The third character must not be a lowercase English alphabetic character.
// The fourth character must not be an uppercase English alphabetic character.
// The fifth character must be an uppercase English alphabetic character.

export { charRange };
