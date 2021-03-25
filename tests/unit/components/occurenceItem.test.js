import { shallowMount } from '@vue/test-utils';
import OccurenceItem from '../../../src/components/occurenceItem';

describe('Testing occurenceItem component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(OccurenceItem);
  })

  test('Is occurenceItem an instance of Vue?', () => {
    expect(wrapper.vm).toBeTruthy();
  })
  test('The state of items starts with empty array', () => {
    expect(wrapper.vm.items).toStrictEqual([]);
  })

  test('The state of type starts with list', () => {
    expect(wrapper.vm.type).toBe('');
  })

  test('The state of info starts with empty string', () => {
    expect(wrapper.vm.info).toBe('');
  })

  test('If the method showTime returns a timePassed', () => {

    const time = {
      start_time: new Date()
    }


    time.start_time.setMonth(time.start_time.getMonth() - 6)
    time.start_time.setHours(time.start_time.getHours() - 2);
    time.start_time.setMinutes(time.start_time.getMinutes() - 10)

    expect(wrapper.vm.showTime(time)).toBe('4346h 10min');
  })

  test('If the method showInfo returns a getInfo', () => {

    const item =  {
      "id": 7296,
      "location": "FT III (GRACO)",
      "campus": "Darcy A",
      "transductor": 8,
      "data": {},
      "start_time": "2020-11-03T08:52:03.733013",
      "end_time": null
    }

    wrapper.vm.info = 'conection_fail';

    expect(wrapper.vm.showInfo(item)).toBe('Possível queda de energia');
  })

})
