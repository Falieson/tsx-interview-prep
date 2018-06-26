/**
* Returns a random integer between min (inclusive) and max (inclusive)
* Using Math.round() will give you a non-uniform distribution!
*/
export default function getRandomInt(min: number= 0, max: number = 99999999) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
