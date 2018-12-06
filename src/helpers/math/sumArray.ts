// tslint:disable
export default function sumArray(arr) {
  // console.log({arr})
  if (arr === undefined) throw error('sumArray(arr): arr must be an array, not: undefined')
  if (!Array.isArray(arr)) throw error('sumArray() must be an array, not: ' + typeof(arr))

  return arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
},                  0)
