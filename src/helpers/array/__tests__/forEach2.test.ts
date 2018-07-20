// tslint:disable no-any
import forEach2 from '../forEach2'

function decorate(arr: any[]): any {
  const res = [...arr]
  res['forEach2'] = forEach2 // tslint:disable-line no-string-literal
  return res
}

describe('.forEach2(cb)', () => {
  test('works', () => {
    const data = [1, 2, 3, 4]
    const res: any[] = []

    decorate(data).forEach2((d: any) => res.push(d))
    expect(data).toEqual(res)
  })
})
