import pageHeader from './../../src/components/pageHeader.vue';
import { shallowMount } from '@vue/test-utils'
import MASTER from '../../src/services/masterApi/http-common'
import flushPromises from 'flush-promises'

jest.mock('../../src/services/masterApi/http-common');

const mocked_data = [
    {
        acronym: 'fga',
        id: 1
    },
    {
        acronym: 'fce',
        id: 2
    },
    {
        acronym: 'fup',
        id: 3
    },
    {
        acronym: 'darcy',
        id: 4
    },
]

MASTER.get.mockResolvedValue({
    data: mocked_data,
});


describe('pageHeader', () => {
    it('has data', () => {
        expect(typeof pageHeader.data).toBe('function');
    });
    it('get data', async() => {
        const wrapper = shallowMount(pageHeader);
        await flushPromises();
        expect(wrapper.vm.$data.options).toStrictEqual([
            {
                acronym: 'Todos os campi',
                id: null
            },
            ...mocked_data,
        ]);
    });
})
