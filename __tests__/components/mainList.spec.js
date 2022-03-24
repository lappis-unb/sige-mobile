import MainList from './../../src/components/mainList.vue';
import historyItem from './../../src/components/historyItem.vue';
import transducerItem from './../../src/components/transducerItem.vue';
import occurenceItem from './../../src/components/occurenceItem.vue';
import listItem from './../../src/components/listItem.vue';
import { mount } from '@vue/test-utils';

describe('MainList', () => {
    it('getIcon method without porops', () => {
        let wrapper = mount(MainList)
        expect(wrapper.vm.getIcon()).toBe('warning')

    });
    it('getIcon method with porops', () => {
        let wrapper = mount(MainList, {
            propsData: {
                icon: "test-icon",
            }
        })
        expect(wrapper.vm.getIcon()).toBe('test-icon')

    });
    it('render history items', () => {
        let wrapper = mount(MainList, {
            propsData: {
                items: [{
                    id: '1',
                    name: 'item1',
                    campus_acronym: 'fga',
                    serious_occurence: true,
                    light_occurence: false
                }],
                type: 'history',
            }
        });
        expect(wrapper.findComponent(historyItem).exists()).toBe(true);
    });
    it('render transducer items', () => {
        let wrapper = mount(MainList, {
            propsData: {
                items: [{
                    id: '1',
                    name: 'item1',
                    campus_acronym: 'fga',
                    serious_occurence: true,
                    light_occurence: false
                }],
                type: 'transducer',
            }
        });
        expect(wrapper.findComponent(transducerItem).exists()).toBe(true);
    });
    it('render occurence items', () => {
        let wrapper = mount(MainList, {
            propsData: {
                items: [{
                    id: '1',
                    name: 'item1',
                    campus_acronym: 'fga',
                    serious_occurence: true,
                    light_occurence: false
                }],
                type: 'occurence',
            }
        });
        expect(wrapper.findComponent(occurenceItem).exists()).toBe(true);
    });
    it('render list items', () => {
        let wrapper = mount(MainList, {
            propsData: {
                items: [{
                    id: '1',
                    name: 'item1',
                    campus_acronym: 'fga',
                    serious_occurence: true,
                    light_occurence: false
                }],
            }
        });
        expect(wrapper.findComponent(listItem).exists()).toBe(true);
    });
})
