const allCrimes = require('../data/crimeTypes.json');
const { createCsv } = require('../utils/utils');

const generateRandomCrimes = () => {
    return allCrimes.map((crimeName, id) => ({ id: id + 1, crimeName }));
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'crimeName', title: 'opis' },
];

const createCsvForCrime = (crimes) => {
    createCsv('rodzaje-przestepstw', headers, crimes);
};

module.exports = {
    crimes: () => generateRandomCrimes(),
    createCsvForCrime,
};
