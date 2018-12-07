/* Promises
*/

function getA() {
  return "A"
}
function getB(cb: any) {
  setTimeout(() => cb("B"), 0)
}
function getC() {
  return Promise.resolve().then(() => "C")
}
console.log(getABC())

function getABC() {
  const A = getA()
  const B = getA()
  const C = getA()

  return [A,B,C]
}