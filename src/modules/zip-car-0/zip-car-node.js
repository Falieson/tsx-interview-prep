// n = 0, 1, 2, 3, 4, 5... 
// fib(n) = 1, 1, 2, 3, 5, 8... 

function fib(_n) {
  const n = _n

  // 1, 1, 2, 3, 4, 5, 8
  const values = [0, 1]

  for (let index = 0; index <= n+1; index++) {
    if(index === 1) continue;
    if(index === 0) continue;
    curr = values[index - 1] + values[index - 2]

    console.log(index, curr, values)
    values.push(curr)
  }
  return values[values.length-1]
}

console.log(fib(5))
