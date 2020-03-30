export default function getInfo (item, info) {
  if (info === 'conection_fail') {
    return 'Possível queda de energia'
  } else if (info === 'critical_tension' ||
    info === 'precarious_tension') {
    return getPhaseVoltage(item)
  } else if (info === 'phase_drop') {
    return getPhase(item)
  }
}

export function getPhaseVoltage (item) {
  let res = ''
  let isFirst = true

  if (item.data.voltage_a) {
    res += 'A - ' + Math.round(item.data.voltage_a) + 'V '
    isFirst = false
  }
  if (item.data.voltage_b) {
    if (!isFirst) {
      res += ' / '
    }
    res += 'B - ' + Math.round(item.data.voltage_b) + 'V '
    isFirst = false
  }
  if (item.data.voltage_c) {
    if (!isFirst) {
      res += ' / '
    }
    res += 'C - ' + Math.round(item.data.voltage_c) + 'V '
    isFirst = false
  }
  return res
}

export function getPhase (item) {
  let res = ''
  let isFirst = true

  if (item.data.voltage_a) {
    res += 'Fase A '
    isFirst = false
  }
  if (item.data.voltage_b) {
    if (!isFirst) {
      res += ' / '
    }
    res += 'Fase B '
    isFirst = false
  }
  if (item.data.voltage_c) {
    if (!isFirst) {
      res += ' / '
    }
    res += 'Fase C '
    isFirst = false
  }
  return res
}
