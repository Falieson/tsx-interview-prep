export default function averageArr(arr) {
  // console.log({arr})
  if (arr === undefined) throw error('averageArr(arr): arr must be an array, not: undefined')
  if (!Array.isArray(arr)) throw error('averageArr() must be an array, not: ' + typeof(arr))

  return arr.reduce((p, c) => p + c, 0) / arr.length
}
