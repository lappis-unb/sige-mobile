import HistoryItem from './../../src/components/historyItem.vue';
import { mount } from '@vue/test-utils';

describe('HistoryItem', () => {
  const wrapper = mount(HistoryItem, {
    propsData: {
      items: [{
        id: '1',
        transductor: 'transductor',
        start_time: '112873482',
        type: 'default',
        location: 'brasilia',
        campus: 'darcy',
        writtenStartTime: '5am',
        writtenEndTime: '5pm'
      }]
    }
  })

  it('render text', () => {
    expect(wrapper.text()).toContain('default brasilia (darcy) 5am - 5pm')
  })
})
