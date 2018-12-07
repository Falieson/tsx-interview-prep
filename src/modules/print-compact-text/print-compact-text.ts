/*
1. Each word in the input string is replaced with the following: the first letter of the word,
the count of distinct (*unique*) letters between the first and last letter, and the last letter
of the word. For example, "Automotive" would be replaced by "A8e".

2. A "word" is defined as a sequence of alphabetic characters, delimited by any non-alphabetic characters.

3. Any non-alphabetic character in the input string should appear in the output string in
its original relative location.

Please include this problem description in the comment at the top of your solution.
The problem is designed to take approximately 1-2 hours.
*/

const testAlpha = (letter: string) => new RegExp(/^[A-Za-z]+$/).test(letter)

function uniqueLetterCount(word: string) {
  const letters: string[] = []

  word.toLowerCase().split('').forEach(c => {
    if (!letters.find(l => l === c)) letters.push(c)
  })
  return letters.length
}
function compactWord(_word: string) {
  const word = _word.split('')
  // shouldn't happen
  if (word.length <= 0) return ``
  // if a word is only 1 char long it should be either just the char or char0
  if (word.length === 1) return `${word.join('')}0`

  const first = word.splice(0, 1)
  const last = word.splice(-1, 1)
  const len = uniqueLetterCount(word.join(''))

  return `${first}${len}${last}`
}

export default function CompactText(query: string) {
  const chars = query.split('')
  let word = ''
  let result = ''

  // walk the string
  chars.forEach((c, i) => {
    if (testAlpha(c)) {
      word += c
    } else {
      result += c
    }

    // if next character is not part of a word, do something
    const nextChar = chars[i + 1]
    const wordEnded = !testAlpha(nextChar) && word.length > 0
    if (!nextChar || wordEnded) {
      result += compactWord(word)
      word = ''
    }
  })

  return result
}
