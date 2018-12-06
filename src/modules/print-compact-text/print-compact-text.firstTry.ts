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
  const chars = query.split('')
  let result = ''

  let start = 0
  let end = 0
  let started = false

  chars.forEach((c, dex) => {
    const isAlpha = testAlpha(c)
    const prevDex = dex - 1
    let isLastCharOfWord = false
    const isLastCharOfQuery = dex === query.length - 1

    // first character of word
    if (!started && isAlpha) {
      start = dex
      started = true
    } else if(!started && !isAlpha){
      // isn't part of a word
      result += c
    }
    // console.log(c, {result, chars, start, started, end, t: query.substr(start, end)})

    // previous character was last letter of word
    if (started && !isAlpha) {
      end = prevDex
      started = false
      isLastCharOfWord = true
    }

    // word goes to the end of the query
    if(started && isLastCharOfQuery) {
      end = dex
      isLastCharOfWord = true
    }

    // add the word compacted to the result
    if(isLastCharOfWord) {
      const partial = chars.join('').substr(start, end+1)
      const f = partial.split('').shift()
      const l = start !== end ? partial.split('').pop() : ''
      const len = partial.length - `${f}${l}`.length > 0 ? partial.length - `${f}${l}`.length : 0
      // console.log(c, {partial, start,end, f, l, t: query.substr(start, end+1, len: partial.length)})
      result += `${f}${len}${l}`

      if(!l && c) {
        result += c
      }
    }
  })

  return result
}
