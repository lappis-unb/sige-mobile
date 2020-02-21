import getInfo from './info'
import timePassedDays from './timePassedDays'
import getOccurenceName from './getOccurenceName'

export default function separateInDays (arr, type, today, yesterday, beforeYesterday, occurrences = []) {
  let now = new Date()
  arr.forEach((elem) => {
    let startTime = new Date(elem.start_time)
    let endTime = elem.end_time === null ? new Date() : new Date(elem.end_time)

    let item = {
      ...elem,
      originalType: type,
      type: getOccurenceName(type),
      writtenStartTime: timePassedDays(startTime, endTime, true),
      writtenEndTime: timePassedDays(endTime, now, false),
      info: getInfo(elem, type)
    }
    if (item.end_time === null) {
      occurrences.push(item)
    }
    endTime.setHours(0, 0, 0, 0)
    now.setHours(0, 0, 0, 0)
    
    let diff = Math.floor((now - endTime) / (1000 * 60 * 60 * 24))

    if (diff === 0) {
      today.push(item)
    } else if (diff === 1) {
      yesterday.push(item)
    } else if (diff === 2) {
      beforeYesterday.push(item)
    }
  })
}
