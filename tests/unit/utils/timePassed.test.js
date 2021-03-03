import timePassed from '../../../src/utils/timePassed';

describe('Testing time passed', () => {


  test('if it be less than 1 minute', () => {
    expect(timePassed(new Date())).toBe('agora');
  });

  const time = undefined

  test('if time is undefined', () => {
    expect(timePassed(time)).toBe('indeterminado');
  });



})
