const moment = require('moment');
const cryptoRandomString = require('crypto-random-string');

const {
    getRandIntNumberFromRange,
    getRandomDate,
    getMaxDate,
    createCsv,
} = require('../utils/utils');
const allCars = require('../data/cars.json');

const generateRandomCars = async (count) => {
    const cars = [];
    const countMark = allCars.length;
    for (let i = 0; i < count; i++) {
        const { brand, models } = allCars[getRandIntNumberFromRange(0, countMark)];
        const model = models[getRandIntNumberFromRange(0, models.length)];
        const productionDate = getRandomDate(
            new Date(1990, 0, 1),
            new Date(Date.now()),
        );
        const registerDate = getRandomDate(
            productionDate,
            getMaxDate(productionDate, 1, 0, 0),
        );
        cars.push({
            id: i + 1,
            brand,
            model,
            productionDate: moment(productionDate).format('YYYY-MM-DD HH:mm:ss'),
            registerDate: moment(registerDate).format('YYYY-MM-DD HH:mm:ss'),
            registerNumber: `${cryptoRandomString({
                length: 3,
                characters: 'abcdefghijklmnopqrstuvwxyz',
            })}-${cryptoRandomString({
                length: 5,
                type: 'alphanumeric',
            })}`.toUpperCase(),
            vinNumber: cryptoRandomString({
                length: 15,
                type: 'alphanumeric',
            }).toUpperCase(),
        });
    }
    return cars;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'brand', title: 'marka' },
    { id: 'model', title: 'model' },
    { id: 'productionDate', title: 'data_produkcji' },
    { id: 'registerDate', title: 'data_rejestracji' },
    { id: 'registerNumber', title: 'numer_rej' },
    { id: 'vinNumber', title: 'numer_vin' },
];

const createCsvForCars = async (cars) => {
    await createCsv('pojazdy', headers, cars);
};

module.exports = {
    cars: async (count) => await generateRandomCars(count),
    createCsvForCars,
};
