// tslint:disable
export default  class NumberIterator {
  constructor({
    start = 0
  } = {}) {
    return (function(n) {
      return function() {
        n += 1
        return n
      }
    }(start))
  }
}
