import separateInDays from '../../../src/utils/separateInDays';
import timePassedDays from '../../../src/utils/timePassedDays';

describe("Testing separate in days function", () => {

  test('If todays occurences are being set ', () => {

    var example = [
      {
          id: 18611,
          location: "FT I",
          campus: "Darcy A",
          transductor: 3,
          data: {},
          start_time: "2021-02-10T20:35:02.968225",
          end_time: null
      }
    ]

    var expected = [{
      ...example[0],
      info: undefined,
      originalType: "transductor_connection_fail",
      type: "Falha de comunicação",
      writtenEndTime: timePassedDays(new Date(), new Date(), false),
      writtenStartTime: "43 dias "
    }]
    var today = [], yesterday = [], beforeYesterday = [], occurences = [];

    separateInDays(example, 'transductor_connection_fail', today, yesterday, beforeYesterday, occurences);

    expect(today).toStrictEqual(expected);

  })

  test('If yesterdays occurences are being set ', () => {
    let yest = new Date();
    yest.setDate(yest.getDate() - 1);

    var example = [
      {
        id: 22165,
        location: "UED2",
        campus: "FGA",
        transductor: 6,
        data: {},
        start_time: yest,
        end_time: yest
    }
    ]

    var expected = [{
      ...example[0],
      info: undefined,
      originalType: "transductor_connection_fail",
      type: "Falha de comunicação",
      writtenEndTime: timePassedDays(yest, yest, true),
      writtenStartTime: timePassedDays(yest, new Date(), false),
    }]
    var today = [], yesterday = [], beforeYesterday = [], occurences = [];

    separateInDays(example, 'transductor_connection_fail', today, yesterday, beforeYesterday, occurences);

    expect(yesterday).toStrictEqual(expected);

  })

  test('If before yesterdays occurences are being set ', () => {
    let bef_yes = new Date();
    bef_yes.setDate(bef_yes.getDate() - 2);
    var example = [
      {
        id: 22165,
        location: "UED2",
        campus: "FGA",
        transductor: 6,
        data: {},
        start_time: bef_yes,
        end_time: bef_yes
    }
    ]

    var expected = [{
      ...example[0],
      info: undefined,
      originalType: "transductor_connection_fail",
      type: "Falha de comunicação",
      writtenEndTime: timePassedDays(bef_yes, bef_yes, true),
      writtenStartTime: timePassedDays(bef_yes, new Date(), false),
    }]
    var today = [], yesterday = [], beforeYesterday = [], occurences = [];

    separateInDays(example, 'transductor_connection_fail', today, yesterday, beforeYesterday, occurences);

    expect(beforeYesterday).toStrictEqual(expected);

  })

})




