// SCORED 81% mainly because of the definition of "distinct letters" means "unique letters"
/*
1. Each word in the input string is replaced with the following: the first letter of the word, the count of distinct letters between the first and last letter, and the last letter of the word. For example, "Automotive" would be replaced by "A8e".

2. A "word" is defined as a sequence of alphabetic characters, delimited by any non-alphabetic characters.

3. Any non-alphabetic character in the input string should appear in the output string in its original relative location.
*/

const testAlpha = (letter: string) => new RegExp(/^[A-Za-z]+$/).test(letter)
function compactWord(word: string) {
  if (word.length <= 0) return ``
  if (word.length === 1) return `${word}0`

  const first = word.slice(0, 1)
  const last = word.slice(-1)
  const len = word.length - 2

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
