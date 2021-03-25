import { shallowMount } from '@vue/test-utils';
import LastHours from '../../../src/pages/LastHours';
import MASTER from '../../../src/services/masterApi/http-common';
import data from '../../mocks/occurences_period.json';

jest.mock('../../../src/services/masterApi/http-common');

describe('Testing LastHours Page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(LastHours);
    MASTER.get.mockImplementation(() => {
      return Promise.resolve({data});
    });
  })

  afterEach(() => {
    jest.resetAllMocks();
  })

  test('Is LastHours an instance of Vue?', () => {
    expect(wrapper.vm).toBeTruthy();
  })

  test('If the correct properties are present in the component state', () => {

    const expected = ['today', 'yesterday', 'beforeYesterday', 'key', 'isLoading']
    const received = Object.keys(wrapper.vm.$data)

    expect(received).toStrictEqual(expected);
  })

  test('If the variable isLoading being initialized with true', async () => {

    expect(wrapper.vm.isLoading).toBeTruthy();

  })
  test('Did MASTER.get call one time?', () => {

    expect(MASTER.get).toHaveBeenCalledTimes(1);

  })

  test('If the correct endpoint has been passed', () => {

    expect(MASTER.get).toHaveBeenCalledWith('/occurences/?type=period')

  })

  test('If the response.data of api returns the correct data', async () => {

    const response = await MASTER.get();

    expect(response.data).toBe(data);
  })

})
