import times from '../../globals/times'
import getRandomInt from '../../math/getRandomInt'
import MergeSort from '../mergeSort'

describe('mergeSort', () => {
  test('merges two arrays', () => {
    const problem = [
      [1, 2, 5, 6],
      [3, 4, 7, 8]
    ]
    const solution = [1, 2, 3, 4, 5, 6, 7, 8]
    const sorter = new MergeSort()
    expect(sorter.merge(problem[0], problem[1])).toEqual(solution)
  })
  test('sort a large array (10,000)', () => {
    const problem = times(10000, () => getRandomInt())
    // make a copy of the problem set and do JS's native sort algorithm on the copy
    const solution = [...problem].sort((a, b) => a > b ? 1 : -1)

    // without a copy, sort would do the work on the problem set and then our code does nothing
    expect(solution[0]).not.toEqual(problem[0]) // 1 in 9999,9999 that this would be the same

    expect(new MergeSort(problem)).toEqual(solution)
  })
  test('sort a big array (100,000)', () => {
    const problem = times(10000, () => getRandomInt())

    // make a copy of the problem set and do JS's native sort algorithm on the copy
    const solution = [...problem].sort((a, b) => a > b ? 1 : -1)
    // without a copy, sort would do the work on the problem set and then our code does nothing
    expect(solution[0]).not.toEqual(problem[0]) // 1 in 9999,9999 that this would be the same

    expect(new MergeSort(problem)).toEqual(solution)
  })
})
