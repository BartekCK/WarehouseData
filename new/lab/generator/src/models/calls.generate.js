const {
    getMaxDate,
    createCsv,
    createRandomIp,
    getRandomDate,
} = require('../utils/utils');
const moment = require('moment');

const generateRandomCalls = async (count) => {
    const calls = [];
    for (let i = 0; i < count; i++) {
        const startDate = getRandomDate(new Date(1990, 0, 1), new Date(Date.now()));
        const endDate = getRandomDate(startDate, getMaxDate(startDate, 0, 0, 1));
        calls.push({
            id: i + 1,
            destinationAddress: createRandomIp(),
            startDate: moment(startDate).format('YYYY-MM-DD HH:mm:ss'),
            endDate: moment(endDate).format('YYYY-MM-DD HH:mm:ss'),
        });
    }
    return calls;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'destinationAddress', title: 'adres_docelowy' },
    { id: 'startDate', title: 'data_rozpoczecia_polaczenia' },
    { id: 'endDate', title: 'data_zakonczenia_polaczenia' },
];

const createCsvForCalls = async (calls) => {
    await createCsv('polaczenia', headers, calls);
};

module.exports = {
    calls: async (count) => await generateRandomCalls(count),
    createCsvForCalls,
};
