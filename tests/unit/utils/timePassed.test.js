import timePassed from '../../../src/utils/timePassed';

describe('Testing time passed', () => {


  test('If it be less than 1 minute', () => {
    expect(timePassed(new Date())).toBe('agora');
  });

  test('If time is undefined', () => {
    const time = undefined
    expect(timePassed(time)).toBe('indeterminado');
  });

  test('If passing 2 hours before now returns 2 horas', () => {
    const time = new Date()
    time.setHours(time.getHours() - 2)
    expect(timePassed(time)).toBe('2 horas');
  });

  test('If passing 2 hours and 10 minutes before now returns 2h10min', () => {
    const time = new Date()
    time.setHours(time.getHours() - 2);
    time.setMinutes(time.getMinutes() - 10)
    expect(timePassed(time)).toBe('2h 10min');
  });

  test('If passing less than one hour', () => {
    const time = new Date()
    time.setMinutes(time.getMinutes() - 10)
    expect(timePassed(time)).toBe('10 min');
  });
})
