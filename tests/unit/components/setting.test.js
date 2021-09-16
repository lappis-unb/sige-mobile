import { shallowMount, createLocalVue } from '@vue/test-utils';
import Setting from '../../../src/components/setting';
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Testing Setting component', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      actionClick: jest.fn(),
      actionInput: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })


  test('Is Setting an instance of Vue?', () => {
    const wrapper = shallowMount(Setting, { store, localVue })

    expect(wrapper.vm).toBeTruthy();
  })


})
