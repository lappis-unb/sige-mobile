import MASTER from '../../../src/services/masterApi/http-common';
import data from '../../mocks/default.json';

jest.mock('../../../src/services/masterApi/http-common');

describe("Testing http-common", () => {


  beforeEach(() => {
    MASTER.get.mockImplementation(() => {
      return Promise.resolve({data});
    });
  })

  afterEach(() => {
    jest.resetAllMocks();
  })

  test('Did MASTER.get call one time?', async () => {
    await MASTER.get();

    expect(MASTER.get).toHaveBeenCalledTimes(1);

  })

  test('If the response.data of api returns the correct data', async () => {

    const response = await MASTER.get();

    expect(response.data).toBe(data);

  })

})
