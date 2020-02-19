export default function timePassedDays (date, compareDate, isStartTime) {
  let res = ''
  let day = new Date(date)
  let compareDay = new Date(compareDate)

  day.setHours(0, 0, 0, 0)
  compareDay.setHours(0, 0, 0, 0)
  let days = Math.floor((compareDay - day) / (1000 * 60 * 60 * 24))

  if (isStartTime && days > 0) {
    let plural = days > 0 ? 's ' : ' '

    res += days.toString() + ' dia' + plural
  } else {
    let h = date.getHours()
    let min = date.getMinutes()
    res += h.toString() + 'h' + min.toString().padStart(2, 0)
  }
  return res
}
