// tslint:disable
export default function percentComplete(found, total, precision= 0) {
  return round(found / total * 100, precision).toString().padStart(precision > 0 ? 3 + precision : 2, '0')
}
