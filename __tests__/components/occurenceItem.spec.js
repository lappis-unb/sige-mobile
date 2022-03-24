import OccurenceItem from './../../src/components/occurenceItem.vue';
import { mount } from '@vue/test-utils';
import timePassed from '../../src/utils/timePassed'

jest.mock('../../src/utils/timePassed');

describe('OccurenceItem', () => {
    it('render text', () => {
        timePassed.mockReturnValueOnce('777 min');
        let wrapper = mount(OccurenceItem, {
            propsData: {
                items: [{
                    id: '1',
                    name: 'item1',
                    campus: 'fga',
                    transductor: 'transductor_name',
                    location: "gama",
                    start_time: 1648080087176
                }],
                type: 'occurence',
                info: 'info test'
            }
        });
        expect(wrapper.text()).toContain('gama (fga)  777 min')
    });
})
