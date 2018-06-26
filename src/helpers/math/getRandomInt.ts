export default function getRandomInt(min: number= 0, max: number = 99999999) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
