import PrintSpiral from '.'

describe('PrintSpiral', () => {
  test('4x4', () => {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ]
    const output = '1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10'
    expect(PrintSpiral(input)).toEqual(output)
  })
  test('5x3', () => {
    const input = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ]
    const output = '1 2 3 4 5 6 12 18 17 16 15 14 13 7 8 9 10 11'
    expect(PrintSpiral(input)).toEqual(output)
  })
})
