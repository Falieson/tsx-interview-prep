// Automotive
// 1defabc1 cb!a %%%def1123
// a hot character
// at
// x
// tipu-is-smart
// 1234567890
// a98779079745092740
// 98779079745092740a

import CompactText from '.'

describe('CompactText', () => {
  test('Automotive', () => {
    const input = 'Automotive'
    const output = 'A6e'
    expect(CompactText(input)).toEqual(output)
  })
  test('zipPer', () => { // is p distinct from P? lets assume not, ie zipPer == zipper
    const input = 'zipPer'
    const output = 'z3r'
    expect(CompactText(input)).toEqual(output)
  })
  test('x', () => {
    const input = 'x'
    const output = 'x0'
    expect(CompactText(input)).toEqual(output)
  })
  test('at', () => {
    const input = 'at'
    const output = 'a0t'
    expect(CompactText(input)).toEqual(output)
  })
  test('1234567890', () => {
    const input = '1234567890'
    const output = '1234567890'
    expect(CompactText(input)).toEqual(output)
  })
  test('1defabc1 cb!a %%%def1123', () => {
    const input = '1defabc1 cb!a %%%def1123'
    const output = '1d4c1 c0b!a0 %%%d1f1123'
    expect(CompactText(input)).toEqual(output)
  })
  test('a hot character', () => {
    const input = 'a hot character'
    const output = 'a0 h1t c6r'
    expect(CompactText(input)).toEqual(output)
  })
  test('tipu-is-smart', () => {
    const input = 'tipu-is-smart'
    const output = 't2u-i0s-s3t'
    expect(CompactText(input)).toEqual(output)
  })
  test('a98779079745092740', () => {
    const input = 'a98779079745092740'
    const output = 'a098779079745092740'
    expect(CompactText(input)).toEqual(output)
  })
  test('98779079745092740a', () => {
    const input = '98779079745092740a'
    const output = '98779079745092740a0'
    expect(CompactText(input)).toEqual(output)
  })
})
