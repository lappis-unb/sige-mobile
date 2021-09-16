import { shallowMount } from '@vue/test-utils';
import TransducerList from '../../../src/components/transducerList';
import data_occurences from '../../mocks/occurences.json';
import data_campis from '../../mocks/campis.json';

describe('Testing TransducerList component', () => {

  let wrapper;
  var example;

  beforeAll(() => {
    wrapper = shallowMount(TransducerList);

    example = {
      id: 8,
      serial_number: "30000481",
      ip_address: "164.41.86.42",
      port: 1001,
      slave_server: "http://sige.unb.br:443/slave/1/",
      geolocation_latitude: -15.9895,
      geolocation_longitude: -48.0456,
      campus: "http://sige.unb.br:443/campi/2/",
      firmware_version: "1.42",
      name: "UED1",
      broken: false,
      active: true,
      model: "MD30",
      grouping: [
          "http://sige.unb.br:443/groups/6/"
      ],
      "url": "http://sige.unb.br:443/energy-transductors/5/",
      "history": ""
  }

  })

  test('Is TransducerList an instance of Vue?', () => {
    expect(wrapper.vm).toBeTruthy();
  })

  test('If checkArr method is working', () => {

    expect(wrapper.vm.checkArr(data_occurences.transductor_connection_fail, 8, false)).toBe(true);
  })

  test('If verfyOccurences method is working', () => {
    wrapper.vm.occurences = data_occurences;

    var expected = {
      serious: false,
      light: true
    }

    expect(wrapper.vm.verfyOccurences(example)).toStrictEqual(expected);
  })

  test('If addInfos method is working', () => {
    wrapper.vm.occurences = data_occurences;
    wrapper.vm.campi = data_campis;

    var expected = {
      ...example,
      campus_id: 2,
      campus_acronym: 'FGA',
      light_occurence: true,
      serious_occurence: false
    }

    expect(wrapper.vm.addInfos(example)).toStrictEqual(expected);
  })

})
