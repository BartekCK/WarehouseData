const cryptoRandomString = require('crypto-random-string');
const { createCsv } = require('../utils/utils');

const generateDrivers = (identityCards) => {
    const drivers = [];
    for (let i = 0; i < identityCards.length; i++) {
        drivers.push({
            id: i + 1,
            drivingLicenseId: cryptoRandomString({
                length: 6,
                type: 'distinguishable',
            }),
            identityCardId: identityCards[i].id,
        });
    }
    return drivers;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'drivingLicenseId', title: 'prawo_jazdy' },
    { id: 'identityCardId', title: 'id_dowodu' },
];

const createCsvForDrivers = (drivers) => {
    createCsv('kierowcy', headers, drivers);
};

module.exports = {
    drivers: (identityCards) => generateDrivers(identityCards),
    createCsvForDrivers,
};
