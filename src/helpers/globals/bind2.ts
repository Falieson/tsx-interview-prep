// tslint:disable no-any

export default function bind2(this: any, that: any) {
  const initialArgs = Array.prototype.slice.call(arguments, 1)

  return (finalArgs: any[]) => this.apply(that, [...initialArgs, ...finalArgs])
}
