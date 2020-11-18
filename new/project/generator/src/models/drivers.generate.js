const cryptoRandomString = require('crypto-random-string');
const { createCsv } = require('../utils/utils');

const generateDrivers = async (identityCards) => {
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

const createCsvForDrivers = async (drivers) => {
    await createCsv('kierowcy', headers, drivers);
};

module.exports = {
    drivers: async (identityCards) => await generateDrivers(identityCards),
    createCsvForDrivers,
};
