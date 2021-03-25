import { shallowMount } from '@vue/test-utils';
import Transducer from '../../../src/pages/Transducer';

describe('Testing Transducer Page', () => {
  var wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Transducer);
  })

  test('Is Transducer an instance of Vue?', () => {
    expect(wrapper.vm).toBeTruthy();
  })

  test('If the correct properties are present in the component state', () => {

    const expected = ['key', 'isLoading', 'name', 'lastReading', 'tension', 'current', 'power', 'today', 'yesterday', 'beforeYesterday', 'occurrences', 'hasMeasurements', 'seriousOccurrences', 'center', 'mapOptions', 'url', 'attribution']
    const received = Object.keys(wrapper.vm.$data)

    expect(received).toStrictEqual(expected);
  })

  test('If round method returns the correct value', () => {

    expect(wrapper.vm.round(5.229)).toBe(5.23);
  })

  test('If getTime method returns the correct value', () => {
    var time = new Date();
    time.setHours(time.getHours() - 2);
    expect(wrapper.vm.getTime(time)).toBe('há 2 horas');
  })
})
