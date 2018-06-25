// tslint:disable no-any
import map2 from '../map2'

function decorate(arr: any[]): any {
  const res = [...arr]
  res['map2'] = map2 // tslint:disable-line no-string-literal
  return res
}

describe('.map2(cb)', () => {
  test('works', () => {
    const data = [1, 2, 3, 4]
    const res = decorate(data).map2((d: any) => d)
    expect(data).toEqual(res)
  })
})
