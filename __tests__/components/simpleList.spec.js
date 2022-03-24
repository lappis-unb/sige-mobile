import SimpleList from '../../src/components/simpleList.vue';
import listItem from './../../src/components/listItem.vue';
import { mount } from '@vue/test-utils';

describe('SimpleList', () => {
    const wrapper = mount(SimpleList, {
        propsData: {
            items: [{
                id: '1',
                name: 'item1',
                campus_acronym: 'fga',
                serious_occurence: true,
                light_occurence: false
            }, {
                id: '2',
                name: 'item2',
                campus_acronym: 'fce',
                serious_occurence: false,
                light_occurence: true
            }],
            title: "cool-title"
        }
    });
    it('has data', () => {
        expect(wrapper.text()).toBe(
            'cool-title  item1 (fga)  item2 (fce)'
        );
    });
    it('call list item', () => {
        expect(wrapper.findComponent(listItem).exists()).toBe(true);
    });
})
