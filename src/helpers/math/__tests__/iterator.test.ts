// tslint:disable no-any
import { NumberIterator } from '../iterator'

describe('NumberIterator()', () => {
  test('works', () => {
    const counter: any = new NumberIterator()
    expect(counter()).toEqual(1)
    counter()
    expect(counter()).toEqual(3)
  })
  test('can have a start value', () => {
    const counter: any = new NumberIterator({start: 100})
    expect(counter()).toEqual(101)
    counter()
    expect(counter()).toEqual(103)
  })
})
