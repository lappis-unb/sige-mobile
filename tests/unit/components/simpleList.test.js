import { shallowMount } from '@vue/test-utils';
import SimpleList from '../../../src/components/simpleList';

describe('Testing SimpleList component', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(SimpleList);

  })

  test('Is SimpleList an instance of Vue?', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  test('The state of title starts undefined', () => {
    expect(wrapper.vm.title).toBe(undefined);
  })

  test('The state of items starts as an empty array', () => {
    expect(wrapper.vm.items).toStrictEqual([]);
  })

  test('The state of type starts with list', () => {
    expect(wrapper.vm.type).toBe('list');
  })

})
