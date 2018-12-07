import BinaryTreeMode from '.'

describe('BinaryTreeMode', () => {
  test('get the mode', () => {
    const input = {
      left: {
        left: {
          value: 7,
        },
        right: {
          value: 8,
        },
        value: 3,
      },
      right: {
        left: {
          value: 11,
        },
        right: {
          value: 7,
        },
        value: 5,
      },
      value: 1,
    }
    const output = 7
    expect(BinaryTreeMode(input)).toEqual(output)
  })
  test('get the greatest mode', () => {
    const input = {
      left: {
        left: {
          left: {
            value: 8
          },
          value: 7,
        },
        right: {
          value: 8,
        },
        value: 3,
      },
      right: {
        left: {
          value: 11,
        },
        right: {
          value: 7,
        },
        value: 5,
      },
      value: 1,
    }
    const output = 8
    expect(BinaryTreeMode(input)).toEqual(output)
  })
})
