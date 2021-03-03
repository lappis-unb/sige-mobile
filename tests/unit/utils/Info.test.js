import { shallowMount } from '@vue/test-utils';
import getInfo from '../../../src/utils/info';

describe('Testing infos', () => {

  test('conection_fail', () => {
    expect(getInfo(1, 'conection_fail')).toBe('Possível queda de energia');
  });

  const fake_obj = {
    id: 18614,
    location: "SG-11",
    campus: "Darcy A",
    transductor: 7,
    data: {
      voltage_a: 3.87
    },
    start_time: "2021-02-10",
    end_time: null
  }

  test('critical_tension', () => {
    expect(getInfo(fake_obj, 'critical_tension')).toBe('A - 4V ');
  });

  test('precarious_tension', () => {
    expect(getInfo(fake_obj, 'precarious_tension')).toBe('A - 4V ');
  });

  test('phase_drop', () => {
    expect(getInfo(fake_obj, 'phase_drop')).toBe('Fase A ');
  });


})
