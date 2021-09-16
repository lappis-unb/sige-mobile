import { shallowMount } from '@vue/test-utils';
import ItemList from '../../../src/components/listItem';

describe('Testing listItem component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(ItemList);
  })

  test('Is ItemList an instance of Vue?', () => {
    expect(wrapper.vm).toBeTruthy();
  })

  test('The state of items starts with empty array', () => {
    expect(wrapper.vm.items).toStrictEqual([]);
  })

})
