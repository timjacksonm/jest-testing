const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const encrypt = (string, key) => {
  const alphabetArray = alphabet.split('');
  const word = string.toLowerCase();

  const newString = word
    .split('')
    .reduce((acc, letter, index, arr) => {
      const encryptIndex = alphabet.indexOf(letter) + key;
      if (encryptIndex > 25) {
        arr.splice(index, 1, alphabetArray[encryptIndex - 26]);
      } else if (alphabetArray.includes(letter)) {
        arr.splice(index, 1, alphabetArray[encryptIndex]);
      } else {
        arr.splice(index, 1, letter);
      }
      return arr;
    }, [])
    .join('');
  return newString;
};
module.exports = encrypt;
