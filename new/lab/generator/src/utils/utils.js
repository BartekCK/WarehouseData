const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');

const getRandIntNumberFromRange = (min, max) => {
    min = Math.floor(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

module.exports = {
    getRandIntNumberFromRange,

    getRandomDate: (start, end) => {
        return new Date(
            start.getTime() + Math.random() * (end.getTime() - start.getTime()),
        );
    },

    getMaxDate: (date, year, month, day) => {
        return new Date(
            date.getFullYear() + year,
            date.getMonth() + month,
            date.getDate() + day,
        );
    },

    createCsv: (csvName, headers, records) => {
        const csvWriter = createCsvWriter({
            path: path.join(__dirname, `../csv/${csvName}.csv`),
            header: headers,
        });
        csvWriter
            .writeRecords(records) // returns a promise
            .then(() => {
                console.log(`${csvName} created`);
            });
    },

    createRandomIp: () => {
        return `${getRandIntNumberFromRange(0, 256)}.${getRandIntNumberFromRange(
            0,
            256,
        )}.${getRandIntNumberFromRange(0, 256)}.${getRandIntNumberFromRange(
            0,
            256,
        )}`;
    },
};
