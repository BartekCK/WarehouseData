const {
    getRandIntNumberFromRange,
    createCsv,
    getRandomDate,
} = require('../utils/utils');
const moment = require('moment');

const generateRandomEmployees = async (drivers, addresses) => {
    const employees = [];
    for (let i = 0; i < drivers.length; i++) {
        const startDate = getRandomDate(new Date(1990, 0, 1), new Date(2015, 0, 1));
        employees.push({
            id: i + 1,
            driverID: drivers[i].id,
            addressID: addresses[getRandIntNumberFromRange(0, addresses.length)].id,
            salary: getRandIntNumberFromRange(2000, 3500),
            year: startDate.getFullYear(),
            month: startDate.getMonth() + 1,
            day: startDate.getDate(),
        });
    }
    return employees;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'driverID', title: 'id_kierowcy' },
    { id: 'addressID', title: 'id_adresu' },
    { id: 'salary', title: 'pensja_netto' },
    { id: 'year', title: 'rok_podpisania_umowy' },
    { id: 'month', title: 'miesiac_podpisania_umowy' },
    { id: 'day', title: 'dzien_podpisania_umowy' },
];

const createCsvForEmployees = async (employees) => {
    await createCsv('pracownicy', headers, employees);
};

module.exports = {
    employees: async (drivers, addresses) =>
        await generateRandomEmployees(drivers, addresses),
    createCsvForEmployees,
};
