import { shallowMount, createLocalVue } from '@vue/test-utils';
import pageHeader from '../../../src/components/pageHeader';
import MASTER from '../../../src/services/masterApi/http-common';
import data from '../../mocks/campis.json';
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

jest.mock('../../../src/services/masterApi/http-common');

describe('Testing pageHeader component', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
    MASTER.get.mockImplementation(() => {
        return Promise.resolve({data});
      });
  })

  afterEach(() => {
    jest.resetAllMocks();
  })

  test('Is pageHeader an instance of Vue?', () => {
    const wrapper = shallowMount(pageHeader);
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  test('The state of type starts with empty array', () => {
    const wrapper = shallowMount(pageHeader);
    expect(wrapper.vm.type).toBe('');
  })

  test('The state of title starts with empty array', () => {
    const wrapper = shallowMount(pageHeader);
    expect(wrapper.vm.title).toBe('');
  })

  test('The state of backButton starts with empty array', () => {
    const wrapper = shallowMount(pageHeader);
    expect(wrapper.vm.backButton).toBe(false);
  })

  test('The state of backButton starts with empty array', () => {
    const wrapper = shallowMount(pageHeader);
    expect(wrapper.vm.backButton).toBe(false);
  })

  test('If the correct properties are present in the component state', () => {
    const wrapper = shallowMount(pageHeader);

    const expected = ['selected', 'options']
    const received = Object.keys(wrapper.vm.$data)

    expect(received).toStrictEqual(expected);
  })

  test('Did MASTER.get(\'campi/\') call one time?', async () => {

    await MASTER.get('campi/');
    expect(MASTER.get).toHaveBeenCalledTimes(1);

  })

  test('If the variable options receives the same of api response', async () => {
    const wrapper = shallowMount(pageHeader);
    await MASTER.get('campi/');

    const options = [
      {
        acronym: 'Todos os campi',
        id: null
      }
    ]

    data.forEach( item => {
      options.push(item)
    })

    expect(wrapper.vm.options).toStrictEqual(options);

  })

  test('Testing onItemClick function', () => {
    var campi = {
      "id": 2,
      "name": "Faculdade do Gama",
      "acronym": "FGA",
      "transductors": 2,
      "geolocation_latitude": -15.9894,
      "geolocation_longitude": -48.0443,
      "zoom_ratio": "16",
      "groups_related": [
          {
              "id": 6,
              "name": "UED"
          },
          {
              "id": 6,
              "name": "UED"
          }
      ],
      "url": "http://sige.unb.br:443/campi/2/"
  }

    const wrapper = shallowMount(pageHeader, { store, localVue })
    wrapper.vm.options.push(campi);
    wrapper.vm.onItemClick(2);
    expect(wrapper.vm.selected).toBe(1);

  })

})
