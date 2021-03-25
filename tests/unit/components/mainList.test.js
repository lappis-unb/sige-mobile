import { shallowMount } from '@vue/test-utils';
import MainList from '../../../src/components/mainList';

describe('Testing mainList component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(MainList);
  })

  test('Is mainList an instance of Vue?', () => {
    expect(wrapper.vm).toBeTruthy();
  })

  test('The state of info starts with empty string', () => {
    expect(wrapper.vm.info).toBe('');
  })

  test('The state of items starts with empty array', () => {
    expect(wrapper.vm.items).toStrictEqual([]);
  })

  test('The state of list starts with false', () => {
    expect(wrapper.vm.list).toBe(false);
  })

  test('The state of type starts with list', () => {
    expect(wrapper.vm.type).toBe('list');
  })

  test('The state of serious starts with true', () => {
    expect(wrapper.vm.serious).toBe(true);
  })

  test('Is function getIcon returning default icon named warning?', () => {
    expect(wrapper.vm.getIcon()).toBe('warning')
  })



})
