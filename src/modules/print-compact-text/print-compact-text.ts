/*
1. Each word in the input string is replaced with the following: the first letter of the word, the count of distinct letters between the first and last letter, and the last letter of the word. For example, "Automotive" would be replaced by "A6e".

2. A "word" is defined as a sequence of alphabetic characters, delimited by any non-alphabetic characters.

3. Any non-alphabetic character in the input string should appear in the output string in its original relative location.
*/
// const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')
// function findNextAlpha(str) {

//   return
// }

const testAlpha = (letter: string) => new RegExp(/^[A-Za-z]+$/).test(letter)

export default function CompactText(query: string) {
  
}
