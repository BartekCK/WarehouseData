const moment = require('moment');
const cryptoRandomString = require('crypto-random-string');
const allNames = require('../data/firstnames_m.json');
const allSurnames = require('../data/surnames.json');

const { getRandIntNumberFromRange, createCsv } = require('../utils/utils');

const generateIdentityCards = async (count) => {
    const identityCards = [];
    for (let i = 0; i < count; i++) {
        identityCards.push({
            id: 1 + i,
            name: allNames[getRandIntNumberFromRange(0, allNames.length)],
            surname: allSurnames[getRandIntNumberFromRange(0, allSurnames.length)],
            identityNumber: cryptoRandomString({
                length: 11,
                type: 'numeric',
            }),
            identityCardNumber: `${cryptoRandomString({
                length: 3,
                characters: 'abcdefghijklmnopqrstuvwxyz',
            })}${cryptoRandomString({
                length: 6,
                characters: '1234567890',
            })}`.toUpperCase(),
        });
    }
    return identityCards;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'name', title: 'imie' },
    { id: 'surname', title: 'nazwisko' },
    { id: 'identityNumber', title: 'pesel' },
    { id: 'identityCardNumber', title: 'numer_dowodu' },
];

const createCsvForIdentityCards = async (identityCards) => {
    await createCsv('dowody_osobiste', headers, identityCards);
};

module.exports = {
    identityCards: async (count) => await generateIdentityCards(count),
    createCsvForIdentityCards,
};
