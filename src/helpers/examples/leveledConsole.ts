export function leveledConsole(message: string, level: string = 'Info') {
  return console.log(`[${level}] ${message}`) // tslint:disable-line no-console
}

// INSTRUCTOR: OK, try again supporting more of the arguments
export function calledLC(message: string, level: string = 'Info') {
  const initialArgs = Array.prototype.slice.call(arguments, 2)
  return console.log.call(console, `[${level}] ${message}`, ...initialArgs)
}

// INSTRUCTOR: great, change it from call to apply
export default function appliedLC(message: string, level: string = 'Info') {
  const initialArgs = Array.prototype.slice.call(arguments, 2)
  return console.log.apply(console, [`[${level}] ${message}`, ...initialArgs])
}
