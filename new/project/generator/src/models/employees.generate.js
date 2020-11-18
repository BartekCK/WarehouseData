const {
    getRandIntNumberFromRange,
    createCsv,
    getRandomDate,
} = require('../utils/utils');
const moment = require('moment');

const generateRandomEmployees = (drivers, addresses) => {
    const employees = [];
    for (let i = 0; i < drivers.length; i++) {
        const startDate = getRandomDate(new Date(1990, 0, 1), new Date(2015, 0, 1));
        employees.push({
            id: i + 1,
            driverID: drivers[i].id,
            addressID: addresses[getRandIntNumberFromRange(0, addresses.length)].id,
            salary: getRandIntNumberFromRange(2000, 3500),
            date: moment(startDate).format('YYYY-MM-DD HH:mm:ss'),
        });
    }
    return employees;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'driverID', title: 'id_kierowcy' },
    { id: 'addressID', title: 'id_adresu' },
    { id: 'salary', title: 'pensja_netto' },
    { id: 'date', title: 'data_podpisania_umowy' },
];

const createCsvForEmployees = (employees) => {
    createCsv('pracownicy', headers, employees);
};

module.exports = {
    employees: (drivers, addresses) => generateRandomEmployees(drivers, addresses),
    createCsvForEmployees,
};
