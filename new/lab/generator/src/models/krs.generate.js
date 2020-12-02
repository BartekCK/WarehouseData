const moment = require('moment');
const {
    getRandIntNumberFromRange,
    createCsv,
    getRandomDate,
} = require('../utils/utils');
const cryptoRandomString = require('crypto-random-string');

const generateRandomKrs = async (legalForms, count) => {
    const krs = [];
    for (let i = 0; i < count; i++) {
        const registerDate = getRandomDate(
            new Date(1990, 0, 1),
            new Date(Date.now()),
        );
        krs.push({
            id: i + 1,
            nip: cryptoRandomString({
                length: 10,
                type: 'numeric',
            }),
            regon: cryptoRandomString({
                length: 9,
                type: 'numeric',
            }),
            registerData: moment(registerDate).format('YYYY-MM-DD HH:mm:ss'),
            legalFormsID:
                legalForms[getRandIntNumberFromRange(0, legalForms.length)].id,
            initCapital: getRandIntNumberFromRange(5001, 1000000),
        });
    }
    return krs;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'nip', title: 'nip' },
    { id: 'regon', title: 'regon' },
    { id: 'registerData', title: 'data_rejestracji' },
    { id: 'legalFormsID', title: 'id_formy_prawnej' },
    { id: 'initCapital', title: 'kapital_zalozycielski' },
];

const createCsvForKrs = async (krs) => {
    await createCsv('krs', headers, krs);
};

module.exports = {
    krs: async (legalForms, count) => await generateRandomKrs(legalForms, count),
    createCsvForKrs,
};
