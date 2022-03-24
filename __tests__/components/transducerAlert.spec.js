import TransducerAlert from '../../src/components/transducerAlert.vue';
import { mount } from '@vue/test-utils';

describe('TransducerAlert', () => {
    it('has data', () => {
        expect(typeof TransducerAlert.data).toBe('function');
    });
    it('serious occurence', () => {
        const wrapper = mount(TransducerAlert, {
            propsData: {
                occurrence: {
                    type: 'grave',
                    info: 'test occurence',
                    writtenStartTime: "5am",
                },
                serious: true,
            }
        });
        expect(wrapper.find('q-icon').attributes().name).toBe(
            'img:statics/header_ocorrencia_critica_vertical@4x.png'
        );
        expect(wrapper.text()).toBe('grave test occurence Desde 5am');
    });
    it('not serious occurence', () => {
        const wrapper = mount(TransducerAlert, {
            propsData: {
                occurrence: {
                    type: 'grave',
                    info: 'test occurence',
                    writtenStartTime: "5am",
                },
                serious: false,
            }
        });
        expect(wrapper.find('q-icon').attributes().name).toBe(
            'img:statics/header_ocorrencia_precaria_vertical@4x.png'
        );
        expect(wrapper.text()).toBe('grave test occurence Desde 5am');
    });
})
