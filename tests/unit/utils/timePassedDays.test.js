import timePassedDays from '../../../src/utils/timePassedDays';

describe('Testing time passed days', () => {

  const time1 = '2021-02-22T20:54:48.550Z'
  const time2 = '2021-02-24T20:59:05.998Z'

  test('passed days', () => {
    expect(timePassedDays(time1, time2, 1)).toBe('2 dias ');
  });




})
