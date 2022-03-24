import TransducerList from './../../src/components/transducerList.vue';
import simpleList from '../../src/components/simpleList.vue'
import { mount } from '@vue/test-utils'
import MASTER from '../../src/services/masterApi/http-common'
import flushPromises from 'flush-promises'

jest.mock('../../src/services/masterApi/http-common');

const occurence_data = {
    transductor_connection_fail: [
        { transductor: 1 },
        { transductor: 2 },
        { transductor: 3 },
    ],
    critical_tension: [
        { transductor: 4 },
        { transductor: 5 },
        { transductor: 6 },
    ],
    precarious_tension: [
        { transductor: 7 },
        { transductor: 8 },
        { transductor: 9 },
    ],
    phase_drop: [
        { transductor: 10 },
        { transductor: 11 },
        { transductor: 12 },
    ],
    slave_connection_fail: [
        { transductor: 13 },
        { transductor: 14 },
        { transductor: 15 },
    ]
}
const campi_data = [
    { id: 1, acronym: 'fga' },
    { id: 2, acronym: 'fce' },
    { id: 3, acronym: 'fup' },
    { id: 4, acronym: 'darcy' },
]
const energy_data = [
    {
        campus: "a/b/c/d/1",
        id: 1
    },
    {
        campus: "a/b/c/d/2",
        id: 4
    }
]

MASTER.get.mockResolvedValue(
    {}
).mockResolvedValueOnce(
    { data: occurence_data }
).mockResolvedValueOnce(
    { data: campi_data }
).mockResolvedValueOnce(
    { data: energy_data }
);

const wrapper = mount(TransducerList);

describe('TransducerList', () => {
    it('has data', () => {
        expect(typeof TransducerList.data).toBe('function');
    });
    it('get transducers', async() => {
        await flushPromises();
        expect(wrapper.vm.$data.loading).toBe(false);
        expect(wrapper.vm.$data.transducers).toStrictEqual([
            {
                "campus": "a/b/c/d/1",
                "campus_acronym": "fga",
                "campus_id": 1, "id": 1,
                "light_occurence": true,
                "serious_occurence": false
            },
            {
                "campus": "a/b/c/d/2",
                "campus_acronym": "fce",
                "campus_id": 2, "id": 4,
                "light_occurence": false,
                "serious_occurence": true
            }
        ]);
    });
    it('get campi', async() => {
        await flushPromises();
        expect(wrapper.vm.$data.loading).toBe(false);
        expect(wrapper.vm.$data.campi).toStrictEqual(
            campi_data
        );
    })
    it('get occurences', async() => {
        await flushPromises();
        expect(wrapper.vm.$data.loading).toBe(false);
        expect(wrapper.vm.$data.occurences).toStrictEqual(
            occurence_data
        );
    })
    it('call simple list', async() => {
        await flushPromises();
        expect(wrapper.findComponent(simpleList).exists()).toBe(false)
    })
})
