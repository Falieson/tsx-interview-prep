// tslint:disable no-any
export default function times(n: number, func: (...args: any[]) => any) {
  return Array.from(Array(n)).map(func)
}
