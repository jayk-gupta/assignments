/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const s = str.toLowerCase()
  let numberOfVowels = 0;
  const vowels = ["a", "e", "i", "o", "u"];
      for (let j = 0; j < vowels.length; j++) {
        for (let i = 0; i < s.length; i++) {
          if (s.charAt(i) === vowels[j]) {
            numberOfVowels++;
          };
        }
  }
  return numberOfVowels;
}
// console.log(countVowels('beautiful'))
module.exports = countVowels;