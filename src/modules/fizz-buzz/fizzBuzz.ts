/*
 Write a program that prints the numbers from 1 to 100,
 with each number on its own line. 
 
 But for multiples of three print "Fun" instead of the number 
 the multiples of five print "Bar".
 
 For numbers which are multiples of both three and five print "FunBar".
*/

function myFunc() {
  let result = ''
  for (let n = 1; n <= 100; n++) {
    const isThree = n%3 === 0
    const isFive = n%5 === 0
    
    if(isThree && isFive) {
      result += 'FunBar \n'
    } else if(isThree) {
      result += 'Fun \n'
    } else if(isFive) {
      result += 'Bar\n'
    } else {
      result += `${n}\n`
    }
  }
  return result
}

console.log(myFunc())
