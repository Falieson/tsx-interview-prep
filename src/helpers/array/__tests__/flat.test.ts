// tslint:disable no-any
import { flat, flattenDeep } from '../flat'

describe('flat(arr)', () => {
  test('works', () => {
    const data = [1, 2, [3, 4]]
    const res = [1, 2, 3, 4]

    expect(flat(data)).toEqual(res)
  })
})

describe('flattenDeep(arr)', () => {
  test('works', () => {
    const data = [1, 2, [3, 4, [5, 6]]]
    const res = [1, 2, 3, 4, 5, 6]

    expect(flattenDeep(data)).toEqual(res)
  })
})
