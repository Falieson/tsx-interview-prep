//  # Flatten & FlattenDeep
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

// To flat single level array
// [1, 2, [3, 4]]
// tslint:disable-next-line no-any
export const flat = (arr: any[]) => arr.reduce((acc, val) => acc.concat(val), [])
export default flat

// To enable deep level flatten use recursion with reduce and concat
// var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
// tslint:disable-next-line no-any
export const flattenDeep = (arr: any[]): any[] =>
  arr.reduce((acc, val) => Array.isArray(val)
    ? acc.concat(flattenDeep(val))
    : acc.concat(val), [] // tslint:disable-line align
  )
