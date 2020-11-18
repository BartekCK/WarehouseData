const allAddresses = require('../data/addresses.json');
const { getRandIntNumberFromRange, createCsv } = require('../utils/utils');
const cryptoRandomString = require('crypto-random-string');

const generateRandomAddresses = (count) => {
    const addresses = [];
    const { streets, cities } = allAddresses;
    for (let i = 0; i < count; i++) {
        addresses.push({
            id: i + 1,
            city: cities[getRandIntNumberFromRange(0, cities.length)],
            street: streets[getRandIntNumberFromRange(0, streets.length)],
            homeNumber: `${getRandIntNumberFromRange(1, 200)}${cryptoRandomString({
                length: 1,
                characters: 'abcdefghijklmnopqrstuvwxyz',
            })}`.toUpperCase(),
            streetNumber: `${cryptoRandomString({
                length: 2,
                type: 'numeric',
            })}-${cryptoRandomString({ length: 3, type: 'numeric' })}`,
        });
    }
    return addresses;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'city', title: 'miasto' },
    { id: 'street', title: 'ulica' },
    { id: 'homeNumber', title: 'numer_domu' },
    { id: 'streetNumber', title: 'kod_pocztowy' },
];

const createCsvForAddresses = (addresses) => {
    createCsv('adresy', headers, addresses);
};

module.exports = {
    addresses: (count) => generateRandomAddresses(count),
    createCsvForAddresses,
};
