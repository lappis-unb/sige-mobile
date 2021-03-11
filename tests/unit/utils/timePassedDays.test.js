import timePassedDays from '../../../src/utils/timePassedDays';

describe('Testing time passed days', () => {


  test('If has passed more or equal than 2 days', () => {
    const time1 = '2021-02-22T20:54:48.550Z'
    const time2 = '2021-02-24T20:59:05.998Z'
    expect(timePassedDays(time1, time2, 1)).toBe('2 dias ');
  });

  test('If has passed 1 day', () => {
    const time1 = '2021-02-23T20:54:48.550Z'
    const time2 = '2021-02-24T20:59:05.998Z'
    expect(timePassedDays(time1, time2, 1)).toBe('1 dia ');
  });

  test('If has passed less than 1 day', () => {
    const time1 = new Date('2021-02-24T19:59:00.550Z')
    const time2 = new Date('2021-02-24T20:59:00.998Z')
    expect(timePassedDays(time1, time2, 1)).toBe('16h59');
  });


})
