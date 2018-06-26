// tslint:disable no-any
export function sortByKey(target: any, key: string, decrement: boolean = true) {
  return target.sort((a, b) => {
    const _a = key.split('.').reduce((x, y) => x && x[y], a)
    const _b = key.split('.').reduce((x, y) => x && x[y], b)

    if (decrement) {
      if (_a < _b) return -1
      if (_a > _b) return 1
    }

    if (_a > _b) return -1
    if (_a < _b) return 1
    return 0
  })
}
