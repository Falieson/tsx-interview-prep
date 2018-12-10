import Fibonacci from '.'

describe('Fibonacci', () => {
  test('smallest', () => {
    const input = 1
    const output = 0
    expect(Fibonacci(input)).toEqual(output)
  })
  test('small number', () => {
    const input = 5
    const output = 13
    expect(Fibonacci(input)).toEqual(output)
  })
  test('medium number', () => {
    const input = 10
    const output = 144
    expect(Fibonacci(input)).toEqual(output)
  })
  test('too big of number', () => {
    const input = 1478
    const output = false
    expect(Fibonacci(input)).toEqual(output)
  })
})
