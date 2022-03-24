import TrasnducerItem from '../../src/components/transducerItem.vue';
import { mount } from '@vue/test-utils';

describe('TrasnducerItem', () => {
    it('has data', () => {
        expect(typeof TrasnducerItem.data).toBe('function');
    });
    it('serious type', () => {
        const wrapper = mount(TrasnducerItem, {
            propsData: {
                items: [{
                    id: '1',
                    transductor: 'transductor-name',
                    start_time: '112873482',
                    originalType: 'critical_tension',
                    type: 'default',
                    info: 'transductor-test',
                    writtenStartTime: '5am',
                    writtenEndTime: '5pm'
                  }]
            }
        });
        expect(wrapper.find('q-icon').attributes().name).toBe(
            'img:statics/ic_ocorrencia_critica_color.svg'
        );
        expect(wrapper.text()).toBe('default transductor-test 5am - 5pm');
    });
    it('not serious type', () => {
        const wrapper = mount(TrasnducerItem, {
            propsData: {
                items: [{
                    id: '1',
                    transductor: 'transductor-name',
                    start_time: '112873482',
                    originalType: 'light_type',
                    type: 'default',
                    info: 'transductor-test',
                    writtenStartTime: '5am',
                    writtenEndTime: '5pm'
                  }]
            }
        });
        expect(wrapper.find('q-icon').attributes().name).toBe(
            'img:statics/ic_ocorrencia_precaria_mono.svg'
        );
        expect(wrapper.text()).toBe('default transductor-test 5am - 5pm');
    });
})
