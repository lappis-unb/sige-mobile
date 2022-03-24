import Occurences from './../../src/components/occurences.vue';
import mainList from '../../src/components/mainList.vue'
import { mount } from '@vue/test-utils'
import MASTER from '../../src/services/masterApi/http-common'
import flushPromises from 'flush-promises'

jest.mock('../../src/services/masterApi/http-common');

const mocked_data = {
    transductor_connection_fail: [
        { transductor: 1 },
        { transductor: 2 },
        { transductor: 3 },
    ],
    critical_tension: [4, 5, 6],
    precarious_tension: [7, 8, 9],
    phase_drop: [10, 11, 12],
    slave_connection_fail: [
        { transductor: 13 }
    ]
}

MASTER.get.mockResolvedValue({
    data: mocked_data,
});


describe('Occurences', () => {
    it('has data', () => {
        expect(typeof Occurences.data).toBe('function');
    });
    it('get data', async() => {
        const wrapper = mount(Occurences);
        await flushPromises();
        expect(wrapper.vm.$data.transductor_connection_fail).toStrictEqual([
            { transductor: 1 },
            { transductor: 2 },
            { transductor: 3 },
            { transductor: 13 }
        ]);
        expect(wrapper.vm.$data.critical_tension).toStrictEqual(
            mocked_data.critical_tension
        );
        expect(wrapper.vm.$data.precarious_tension).toStrictEqual(
            mocked_data.precarious_tension);
        expect(wrapper.vm.$data.phase_drop).toStrictEqual(
            mocked_data.phase_drop
        );
        expect(wrapper.vm.$data.isLoading).toStrictEqual(false);
    });
    it('render all main list', async() => {
        const wrapper = mount(Occurences);
        await flushPromises();
        expect(wrapper.findAllComponents(mainList).length).toBe(4);
    });
    it('no occurences', async() => {
        const empity_data = {
            transductor_connection_fail: [],
            critical_tension: [],
            precarious_tension: [],
            phase_drop: [],
            slave_connection_fail: []
        };
        MASTER.get.mockResolvedValue({
            data: empity_data,
        });
        const wrapperNoOccurences = mount(Occurences);
        await flushPromises();
        expect(wrapperNoOccurences.vm.$data.isLoading).toBe(false);
        expect(wrapperNoOccurences.findAllComponents(mainList).length).toBe(0);
        expect(wrapperNoOccurences.text()).toContain('Não há nenhuma ocorrência em andamento')
    });
})
