const { getRandIntNumberFromRange, createCsv } = require('../utils/utils');
const allCars = require('../data/cars.json');

const generateRandomCars = (count) => {
    const cars = [];
    const countMark = allCars.length;
    for (let i = 0; i < count; i++) {
        const { brand, models } = allCars[getRandIntNumberFromRange(0, countMark)];
        const model = models[getRandIntNumberFromRange(0, models.length)];
        cars.push({
            id: i + 1,
            brand,
            model,
            engine: parseFloat(
                `${getRandIntNumberFromRange(1, 4)}.${getRandIntNumberFromRange(
                    0,
                    9,
                )}`,
            ),
            power: getRandIntNumberFromRange(100, 200),
            countPlace: getRandIntNumberFromRange(10, 35),
        });
    }
    return cars;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'brand', title: 'marka' },
    { id: 'model', title: 'model' },
    { id: 'engine', title: 'pojemnosc_silnika' },
    { id: 'power', title: 'moc_km' },
    { id: 'countPlace', title: 'liczba_miejsc' },
];

const createCsvForCars = (cars) => {
    createCsv('pojazdy', headers, cars);
};

module.exports = {
    cars: (count) => generateRandomCars(count),
    createCsvForCars,
};
