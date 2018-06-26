export default function isPowerOf2(v: number) {
  return v && !(v & (v - 1))  // tslint:disable-line no-bitwise
}
