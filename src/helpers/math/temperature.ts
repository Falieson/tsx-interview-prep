export function CelciusFromFarenheit(f) {
  return (f - 32) * (5 / 9)
}
export function KelvinFromCelcius(c) {
  return c + 273.15
}
export function KelvinFromFarenheit(f) {
  return KelvinFromCelcius(CelciusFromFarenheit(f))
}
