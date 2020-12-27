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
            timeStartHour: getRandIntNumberFromRange(10, 17),
            timeStartMinutes: getRandIntNumberFromRange(0, 60),
            timeEndHour: getRandIntNumberFromRange(17, 24),
            timeEndMinutes: getRandIntNumberFromRange(0, 60),
            year: startDate.getFullYear(),
            month: startDate.getMonth() + 1,
            day: startDate.getDate(),
        });
    }
    return times;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'timeStartHour', title: 'godzina_odjazdu' },
    { id: 'timeStartMinutes', title: 'minuty_odjazdu' },
    { id: 'timeEndHour', title: 'godzina_przyjazdu' },
    { id: 'timeEndMinutes', title: 'minuty_przyjazdu' },
    { id: 'year', title: 'rok_kursu' },
    { id: 'month', title: 'miesiac_kursu' },
    { id: 'day', title: 'dzien_kursu' },
];

const createCsvForTimes = async (times) => {
    await createCsv('czas', headers, times);
};

module.exports = {
    times: async (count) => await generateRandomTimes(count),
    createCsvForTimes,
};
