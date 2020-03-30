export default function timePassed (time) {
  let d = new Date(time)
  let now = new Date()
  let min = Math.floor((now - d) / (1000 * 60))
  if (min > 0) {
    if (min < 60) {
      return min + ' min'
    } else {
      let h = Math.floor(min / 60)
      let m = min % 60
      if (m === 0) {
        return h + ' horas'
      } else {
        return h + 'h ' + m + 'min'
      }
    }
  } else if (time !== undefined && time !== null) {
    return 'agora'
  } else {
    return 'indeterminado'
  }
}
