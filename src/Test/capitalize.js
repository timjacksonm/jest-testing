const capitalize = (string) => {
  const newString = Array.from(string).reduce((acc, letter, index, arr) => {
    if (index === 0) {
      arr.shift();
      arr.unshift(letter.toUpperCase());
    }
    return arr;
  }, []);
  return newString.join('');
};
module.exports = capitalize;
