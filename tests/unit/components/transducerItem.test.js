import { shallowMount } from '@vue/test-utils';
import TrasnducerItem from '../../../src/components/transducerItem';

describe('Testing TrasnducerItem component', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(TrasnducerItem);

  })

  test('Is TrasnducerItem an instance of Vue?', () => {
    expect(wrapper.vm).toBeTruthy();
  })

  test('The state of items starts with empty array', () => {
    expect(wrapper.vm.items).toStrictEqual([]);
  })

  test('The state of icon starts with warning', () => {
    expect(wrapper.vm.icon).toBe('warning');
  })

  test('Testing getIcon method passing as param phase_drop', () => {
    expect(wrapper.vm.getIcon('phase_drop')).toBe('img:statics/ic_ocorrencia_critica_color.svg');
  })

  test('Testing getIcon method passing as param critical_tension', () => {
    expect(wrapper.vm.getIcon('phase_drop')).toBe('img:statics/ic_ocorrencia_critica_color.svg');
  })

  test('Testing getIcon method passing as param conection_fail', () => {
    expect(wrapper.vm.getIcon('conection_fail')).toBe('img:statics/ic_ocorrencia_precaria_mono.svg');
  })




})
