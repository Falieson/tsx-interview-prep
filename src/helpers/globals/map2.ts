// tslint:disable no-any
import { CallbackFunctionAny } from '../../types/singleton'

export default function map2(this: any, cb: CallbackFunctionAny) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    const v = this[i]
    res.push(cb.call(this, v, i))
  }
  return res
}
