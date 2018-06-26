import getRandomInt from '../math/getRandomInt'
export function TodayMinusDays(days= 1) {
  const date = new Date()
  const oneDay = 24 * 60 * 60 * 1000
  const last = new Date(date.getTime() - (days * oneDay))
  // var day =last.getDate();
  // var month=last.getMonth()+1;
  // var year=last.getFullYear();

  return last
}
export const LateBetweenMinutes = (min, max) => {
  const minutesLate = getRandomInt(min, max)
  const hours = Math.floor(minutesLate / 60)
  const minutes = minutesLate % 60
  return {total: minutesLate, hours, minutes}
}
export const OffsetDate = (daysBefore, hoursOffset= 0, minutesOffset= 0) => TodayMinusDays(daysBefore)
  .setHours(hoursOffset, minutesOffset, 0)

export const ThisMinute = () => Date.now().setSeconds(0).valueOf()
export const ThisMinuteInUnix = () => ThisMinute() / 1000
export const ThisSecondInUnix = () => parseInt(Date.now() / 1000, 10)
