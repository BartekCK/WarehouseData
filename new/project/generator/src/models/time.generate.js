const {
    createCsv,
    getRandIntNumberFromRange,
    getRandomDate,
} = require('../utils/utils');
const moment = require('moment');

const generateRandomTimes = async (count) => {
    const times = [];
    for (let i = 0; i < count; i++) {
        const startDate = getRandomDate(new Date(2020, 0, 1), new Date(Date.now()));
        times.push({
            id: i + 1,
            timeStart: `${getRandIntNumberFromRange(
                10,
                17,
            )}:${getRandIntNumberFromRange(0, 60)}`,
            timeEnd: `${getRandIntNumberFromRange(
                17,
                24,
            )}:${getRandIntNumberFromRange(0, 60)}`,
            date: moment(startDate).format('YYYY-MM-DD'),
        });
    }
    return times;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'timeStart', title: 'czas_odjazdu' },
    { id: 'timeEnd', title: 'czas_przyjazdu' },
    { id: 'date', title: 'data_kursu' },
];

const createCsvForTimes = async (times) => {
    await createCsv('czas', headers, times);
};

module.exports = {
    times: async (count) => await generateRandomTimes(count),
    createCsvForTimes,
};
