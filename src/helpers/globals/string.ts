export function dashToSpaceUppercase(str: string) {
  return str.replace(/-{1,}/g, ' ').replace(/(\s{1,}|\b)(\w)/g, function(m, space, letter) {
    return space + letter.toUpperCase()
  })
}

export function unixString(str) {
  return str.split(' ').join('_').toLowerCase()
}

export function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(c) {
    return  (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  })
}

export function suuid() {
  return uuid().substr(0, 8)
}

export function uppercaseFirstLetter(str) {
  return typeof(str) === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : ''
}

export function underscoreToSpaceUppercase(str) {
  return str.replace(/_{1,}/g, ' ').replace(/(\s{1,}|\b)(\w)/g, function(m, space, letter) {
    return space + letter.toUpperCase()
  })
}
