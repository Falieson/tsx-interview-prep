/*
Print a given matrix in spiral form
Given a 2D array, print it in spiral form. See the following examples.
*/

const numbArrayToStr = (arr: number[]) => `${arr.join(' ')} `

export default function PrintSpiral(hash: number[][]) {
  const input = hash.slice(0)
  let DIR = 'RIGHT'
  let result = ''

  while (input.length > 0) {
    switch (DIR) {
      case 'RIGHT':
        result += numbArrayToStr(input.splice(0, 1)[0])
        DIR = 'DOWN'
        break

      case 'DOWN':
        input.forEach(row => result += `${row.splice(-1, 1)} `)
        DIR = 'LEFT'
        break

      case 'LEFT':
        result += numbArrayToStr(input.splice(-1, 1)[0].reverse())
        DIR = 'UP'
        break

      case 'UP':
        const reverseInput = input.slice(0).reverse()
        reverseInput.forEach(row => result += `${row.splice(0, 1)} `)
        DIR = 'RIGHT'
        break

      default:
        console.error('reached unreachable switch case')
        break
    }
  }

  return result.trim()
}
