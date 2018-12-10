// n = 0, 1, 2, 3, 4, 5... 
// fib(n) = 1, 1, 2, 3, 5, 8... 

export default function fib(iterations: number) {
  let prev = [0, 1]
  if(iterations === 1) return prev[0]
  if(iterations === 2) return prev[1]
  if(iterations >= 1477) return false

  for (let iteration = 0; iteration <= iterations; iteration++) {
    const newNum = prev[0] + prev[1]
    prev.shift()
    prev.push(newNum)
  }

  return prev[1]
}
