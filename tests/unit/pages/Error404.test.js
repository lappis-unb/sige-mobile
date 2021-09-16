import { shallowMount } from '@vue/test-utils';
import Error404 from '../../../src/pages/Error404';

describe('Testing Error404 Page', () => {

  test('Is Error404 an instance of Vue?', () => {
    const wrapper = shallowMount(Error404);

    expect(wrapper.vm).toBeTruthy();
  })
})
