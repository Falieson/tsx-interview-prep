// tslint:disable no-any
export default class MergeSort {
  constructor(arr?: any[]) {
    if (arr && arr.length > 0) {
      return this.exec(arr)
    }
  }

  merge(left: any[], right: any[]) {
    const res = []
    let indexLeft = 0
    let indexRight = 0

    // SORT
    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        res.push(left[indexLeft])
        indexLeft++
      } else {
        res.push(right[indexRight])
        indexRight++
      }
    }

    // MERGE REMAINDERS
    return res.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }

  exec(arr: any[]): any  {
    if (arr.length <= 1) { // RECURSION BOUNDARY
      return arr
    }

    // SPLIT IN HALF (divide & conqueror)
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return this.merge(
      this.exec(left), this.exec(right)
    )
  }
}
