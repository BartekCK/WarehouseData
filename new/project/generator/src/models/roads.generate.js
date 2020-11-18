const { createCsv, getRandIntNumberFromRange } = require('../utils/utils');
const allAddresses = require('../data/addresses.json');

const generateRoads = (count) => {
    const { streets, cities } = allAddresses;
    const roads = [];
    for (let i = 0; i < count; i++) {
        roads.push({
            id: i + 1,
            startCity: cities[getRandIntNumberFromRange(0, cities.length)],
            endCity: cities[getRandIntNumberFromRange(0, cities.length)],
            priceAdult: getRandIntNumberFromRange(10,15),
            priceNormal: getRandIntNumberFromRange(2,10),
        });
    }
    return roads;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'startCity', title: 'miasto_odjazu' },
    { id: 'endCity', title: 'miasto_przyjazdu' },
    { id: 'priceAdult', title: 'cena_biletu_nor' },
    { id: 'priceNormal', title: 'cena_biletu_ulg' },
];

const createCsvForRoads = (roads) => {
    createCsv('trasy', headers, roads);
};

module.exports = {
    roads: (count) => generateRoads(count),
    createCsvForRoads,
};
