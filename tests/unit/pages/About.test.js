import { shallowMount } from '@vue/test-utils';
import About from '../../../src/pages/About';

describe('Testing About Page', () => {

  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(About);

  })

  test('Is About an instance of Vue?', () => {
    wrapper = shallowMount(About);

    expect(wrapper.vm).toBeTruthy();
  })

  test('If the correct properties are present in the component state', () => {

    const expected = ['projectVersion']
    const received = Object.keys(wrapper.vm.$data)

    expect(received).toStrictEqual(expected);
  })
})
