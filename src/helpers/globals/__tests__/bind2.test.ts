// tslint:disable no-any
import bind2 from '../bind2'

function decorate(obj: any): any {
  obj.bind2 = bind2
  return obj
}

describe('.bind2(target)', () => {
  test('works', () => {
    const data = {
      getX() {
        return this.x
      },
      x: 42,
    }
    const unboundGetX = data.getX
    const boundGetX = decorate(unboundGetX).bind2(data)

    expect(boundGetX()).toEqual(42)
  })
})
