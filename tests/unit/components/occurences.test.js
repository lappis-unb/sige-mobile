import { shallowMount, mount } from '@vue/test-utils';
import Occurences from '../../../src/components/occurences.vue';
import MASTER from '../../../src/services/masterApi/http-common';
import data from '../../mocks/occurences.json';

jest.mock('../../../src/services/masterApi/http-common');

describe('Testing occurences component', () => {

  beforeEach(() => {
    MASTER.get.mockImplementation(() => {
      return Promise.resolve({data});
    });
  })

  afterEach(() => {
    jest.resetAllMocks();
  })

  test('Is Occurences an instance of Vue?', () => {
    const wrapper = shallowMount(Occurences);
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Did MASTER.get(\'occurences\') call one time?', async () => {

    await MASTER.get('occurences/');

    expect(MASTER.get).toHaveBeenCalledTimes(1);

  })

  test('If the variable transductor_connection_fail receives the correct data provided by api', async () => {
    const wrapper = shallowMount(Occurences);

    await MASTER.get('occurences/');

    expect(wrapper.vm.transductor_connection_fail).toBe(data.transductor_connection_fail);

  })

  test('If the correct properties are present in the component state', () => {
    const wrapper = shallowMount(Occurences);

    const expected = ['serious_icon', 'light_icon', 'transductor_connection_fail', 'critical_tension', 'precarious_tension', 'phase_drop', 'isLoading']
    const received = Object.keys(wrapper.vm.$data)

    expect(received).toStrictEqual(expected);
  })




})
