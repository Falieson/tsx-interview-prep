import leveledConsole from '../leveledConsole'
const lCons: any = leveledConsole // tslint:disable-line no-any

describe('leveledConsole(message, level)', () => {
  test('works', () => {
    const level = 'Danger'
    const message = 'Will Robinson'
    const remainder = '!!'

    const res = `[${level}] ${message}`

    console.log = jest.fn()
    lCons(message, level, remainder)
    expect(console.log).toHaveBeenCalledWith(res, remainder)
  })
})
