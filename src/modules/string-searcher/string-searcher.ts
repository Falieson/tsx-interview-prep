/*
Given an array of unique characters arr and a string str, implement a function that finds the
  smallest substring of str containing all the characters in arr. If there are multiple possible
  answers, return any of the smallest.

Return an empty string if such a substring doesn’t exist.

Example

Input
arr: [‘x’, ‘y’, ‘z’]
str: ‘xyyzyzyxx’
// xyyz
// zyx
// zyxx
str: ‘xyyyyyyyz’
Output: ‘zyx’

for(dex1 => {    // i++
  for(dex2 => { // j--

  })
})
*/
function stringSearcher(arr: string[], str: string) {
  let word = ''
  let wordLength = Infinity
  // first word that contains arrLetters
  for (let dex1 = 0; dex1 < str.length; dex1++) {
    for (let dex2 = str.length; dex2 > -1; dex2--) {
      const window = str.substr(dex1, dex2)
      // window search
      // [x, y, y, y, y, y, z]
      // [x, y, y, y, y, y]
      // [x]
      // [y, y, y, y, y, z]
      // [y, y, y, y, y]
      // [y]
      const charCounts = {}
      //   x: 1,
      //   y: 2,
      //   z: 2,
      // }

      window.split('').forEach((c: string) => {
        // one of my arr chars is found
        if (arr.find(a => a === c)) {
          charCounts[c] = charCounts[c] ? charCounts[c] + 1 : 1
        }
      })

      let containsSearchArr = true
      // has at least 1 of each of the arr its succesfull
      // arr.reduce((prev, next) => prev === true ? true :, false)
      arr.forEach(a => {
        if (!charCounts[a]) containsSearchArr = false
      })
      if (containsSearchArr) {
        // if 2 or more of the chars has a count greater than 1 then its failure
        let countOf2s = 0
        Object.values(charCounts).forEach(cc => {
          if (cc >= 2) countOf2s++
        })

        if (countOf2s <= 1 && window.length < wordLength) {
          word = window
          wordLength = window.length
        }
      }
    }
  }

  return word
}
console.log(stringSearcher(['x', 'y', 'z'], 'xyyzyzyxx'))
console.log(stringSearcher(['x', 'y', 'z'], 'xyyzyzyxx') === 'zyx')
console.log(stringSearcher(['x', 'y', 'z'], 'xyyyyyyyz'))
console.log(stringSearcher(['x', 'y', 'z'], 'xyyyyyyyz') === 'xyyyyyyyz')
