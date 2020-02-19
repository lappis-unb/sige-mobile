export default function getOccurenceName (type) {
  switch (type) {
    case 'critical_tension':
      return 'Tensão crítica'
    case 'precarious_tension':
      return 'Tensão precária'
    case 'phase_drop':
      return 'Queda de Fase'
    default:
      return 'Falha de comunicação'
  }
}
