// tslint:disable no-any
import { CallbackFunctionAny } from '../../types/singleton'

export default function forEach2(this: any, cb: CallbackFunctionAny) {
  for (let i = 0; i < this.length; i++) {
    const v = this[i]
    cb.call(this, v, i)
  }
}
