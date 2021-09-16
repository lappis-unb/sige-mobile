import getOccurenceName from '../../../src/utils/getOccurenceName';

describe("Testing occurence names", () => {

  test('critical_tension', () => {
    expect(getOccurenceName('critical_tension')).toBe('Tensão crítica');
  });

  test('precarious_tension', () => {
    expect(getOccurenceName('precarious_tension')).toBe('Tensão precária');
  });

  test('phase_drop', () => {
    expect(getOccurenceName('phase_drop')).toBe('Queda de Fase');
  });

  test('default', () => {
    expect(getOccurenceName('any')).toBe('Falha de comunicação');
  });
})




