import { shallowMount } from '@vue/test-utils';
import HistoryItem from '../../../src/components/mainList';

describe('Testing HistoryItem component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(HistoryItem);
  })

  test('Is HistoryItem an instance of Vue?', () => {
    expect(wrapper.vm).toBeTruthy();
  })

  test('The state of items starts with empty array', () => {
    expect(wrapper.vm.items).toStrictEqual([]);
  })

})
