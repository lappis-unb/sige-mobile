import getInfo from '../../../src/utils/info';

describe('Testing infos', () => {

  test('If info == conection_fail', () => {
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

  const fake_obj_b = {
    id: 18614,
    location: "SG-11",
    campus: "Darcy A",
    transductor: 7,
    data: {
      voltage_b: 3.87
    },
    start_time: "2021-02-10",
    end_time: null
  }

  const fake_obj_c = {
    id: 18614,
    location: "SG-11",
    campus: "Darcy A",
    transductor: 7,
    data: {
      voltage_c: 3.87
    },
    start_time: "2021-02-10",
    end_time: null
  }
  const fake_obj_ab = {
    id: 18614,
    location: "SG-11",
    campus: "Darcy A",
    transductor: 7,
    data: {
      voltage_a: 3.87,
      voltage_b: 3.87
    },
    start_time: "2021-02-10",
    end_time: null
  }

  const fake_obj_ac = {
    id: 18614,
    location: "SG-11",
    campus: "Darcy A",
    transductor: 7,
    data: {
      voltage_a: 3.87,
      voltage_c: 3.87
    },
    start_time: "2021-02-10",
    end_time: null
  }

  const fake_obj_bc = {
    id: 18614,
    location: "SG-11",
    campus: "Darcy A",
    transductor: 7,
    data: {
      voltage_b: 3.87,
      voltage_c: 3.87
    },
    start_time: "2021-02-10",
    end_time: null
  }

  test('If info == critical_tension', () => {
    expect(getInfo(fake_obj, 'critical_tension')).toBe('A - 4V ');
  });

  test('If info == precarious_tension', () => {
    expect(getInfo(fake_obj, 'precarious_tension')).toBe('A - 4V ');
  });

  test('If info == precarious_tension', () => {
    expect(getInfo(fake_obj_b, 'precarious_tension')).toBe('B - 4V ');
  });

  test('If info == precarious_tension', () => {
    expect(getInfo(fake_obj_c, 'precarious_tension')).toBe('C - 4V ');
  });

  test('If info == precarious_tension', () => {
    expect(getInfo(fake_obj_ab, 'precarious_tension')).toBe('A - 4V  / B - 4V ');
  });

  test('If info == precarious_tension', () => {
    expect(getInfo(fake_obj_ac, 'precarious_tension')).toBe('A - 4V  / C - 4V ');
  });

  test('If info == phase_drop => getPhase()', () => {
    expect(getInfo(fake_obj, 'phase_drop')).toBe('Fase A ');
  });

  test('If info == phase_drop => getPhase()', () => {
    expect(getInfo(fake_obj_b, 'phase_drop')).toBe('Fase B ');
  });

  test('If info == phase_drop => getPhase()', () => {
    expect(getInfo(fake_obj_c, 'phase_drop')).toBe('Fase C ');
  });

  test('If info == phase_drop => getPhase()', () => {
    expect(getInfo(fake_obj_ab, 'phase_drop')).toBe('Fase A  / Fase B ');
  });

})
