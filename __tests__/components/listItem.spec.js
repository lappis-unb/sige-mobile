import ItemList from './../../src/components/listItem.vue';
import { mount } from '@vue/test-utils';

describe('ItemList', () => {
    it('render text', () => {
        const wrapper = mount(ItemList, {
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
                }
                ]
            }
        })
        expect(wrapper.text()).toBe('item1 (fga)  item2 (fce)')
    });
    it('icon serious occourence', () => {
        const wrapper = mount(ItemList, {
            propsData: {
                items: [{
                    id: '1',
                    name: 'item1',
                    campus_acronym: 'fga',
                    serious_occurence: true,
                    light_occurence: false
                }]
            }
        })
        expect(wrapper.find('q-icon').attributes().name).toBe(
            'img:statics/ic_ocorrencia_critica_mono_grey.svg'
        );
    });
    it('icon light occourence', () => {
        const wrapper = mount(ItemList, {
            propsData: {
                items: [{
                    id: '2',
                    name: 'item2',
                    campus_acronym: 'fce',
                    serious_occurence: false,
                    light_occurence: true
                }]
            }
        })
        expect(wrapper.find('q-icon').attributes().name).toBe(
            'img:statics/ic_ocorrencia_precaria_mono.svg'
        );
    });
})
