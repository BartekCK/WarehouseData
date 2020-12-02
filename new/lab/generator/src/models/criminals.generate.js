const allNames = require('../data/firstnames_m.json');
const allSurnames = require('../data/surnames.json');
const { getRandIntNumberFromRange, createCsv } = require('../utils/utils');
const cryptoRandomString = require('crypto-random-string');

const generateRandomCriminals = async (addresses, count) => {
    const criminals = [];
    for (let i = 0; i < count; i++) {
        criminals.push({
            id: i + 1,
            name: allNames[getRandIntNumberFromRange(0, allNames.length)],
            surname: allSurnames[getRandIntNumberFromRange(0, allSurnames.length)],
            cardID: cryptoRandomString({
                length: 11,
                type: 'numeric',
            }),
            addressID: addresses[getRandIntNumberFromRange(0, addresses.length)].id,
        });
    }
    return criminals;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'name', title: 'imie' },
    { id: 'surname', title: 'nazwisko' },
    { id: 'cardID', title: 'pesel' },
    { id: 'addressID', title: 'id_adresu' },
];

const createCsvForCriminals = async (criminals) => {
    await createCsv('przestepcy', headers, criminals);
};

module.exports = {
    criminals: async (addresses, count) =>
        await generateRandomCriminals(addresses, count),
    createCsvForCriminals,
};
