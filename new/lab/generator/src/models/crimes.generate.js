const allCrimes = require('../data/crimeTypes.json');
const { createCsv } = require('../utils/utils');

const generateRandomCrimes = async () => {
    return allCrimes.map((crimeName, id) => ({ id: id + 1, crimeName }));
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'crimeName', title: 'opis' },
];

const createCsvForCrime = async (crimes) => {
    await createCsv('rodzaje_przestepstw', headers, crimes);
};

module.exports = {
    crimes: async () => await generateRandomCrimes(),
    createCsvForCrime,
};
