// Write a function `print_tree` that takes two arguments, an integer height
// and boolean hollow and prints a Christmas tree, example output is below.
// You can assume height is >= 4.

// print_tree(10, false)
// --------X--------
// -------XXX-------
// ------XXXXX------
// -----XXXXXXX-----
// ----XXXXXXXXX----
// ---XXXXXXXXXXX---
// --XXXXXXXXXXXXX--
// -XXXXXXXXXXXXXXX-
// XXXXXXXXXXXXXXXXX
// --------X--------

// print_tree(6, false)
// ----X----
// ---XXX---
// --XXXXX--
// -XXXXXXX-
// XXXXXXXXX
// ----X----

// print_tree(10, true)
// --------X--------
// -------X-X-------
// ------X---X------
// -----X-----X-----
// ----X-------X----
// ---X---------X---
// --X-----------X--
// -X-------------X-
// XXXXXXXXXXXXXXXXX
// --------X--------

// print_tree(4, true)
// --X--
// -X-X-
// XXXXX
// --X--

function printTree(height, hollow) {
  const width = ((height - 1) * 2) - 1
  const oneSide = height - 2

  // 1, 3, 5, 7, 9, 11, 13, 15, 17
  const xsCount = n => (n * 2) + 1

  const xcounts = []
  for (let index = 0; index < height; index++) {
    xcounts.push(xsCount(index))
  }
  xcounts.pop()

  const newLine = (level, count) => {
    const xs = Array(count).fill('X')
    const ds = Array(oneSide - level >= 0 ? oneSide - level : oneSide).fill('-').join('')

    const isHollowLevel = level !== 0 && level !== height-1 && level !== height-2
    if(hollow && isHollowLevel) {
      const remElms = xs.length - 2
      const ids = Array(remElms).fill('-')
      xs.splice(1, remElms, ...ids)
    }
    return (ds + xs.join('')).padEnd(width, '-')
  }

  for (let index = 0; index < height; index++) {
    const val = xcounts[index]
    console.log(newLine(index, val))
  }

}
const h = 6
printTree(h, true)
printTree(h, false)
