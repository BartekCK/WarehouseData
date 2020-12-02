const {
    getRandIntNumberFromRange,
    createCsv,
    getRandomDate,
    getMaxDate,
} = require('../utils/utils');
const moment = require('moment');

const generateRandomOperatorContracts = async (operators, count) => {
    const operatorContracts = [];
    for (let i = 0; i < count; i++) {
        const startDate = getRandomDate(new Date(1990, 0, 1), new Date(Date.now()));
        const endDate = getRandomDate(startDate, getMaxDate(startDate, 5, 0, 0));
        operatorContracts.push({
            id: i + 1,
            operatorId: operators[getRandIntNumberFromRange(0, operators.length)].id,
            startDate: moment(startDate).format('YYYY-MM-DD HH:mm:ss'),
            endDate: moment(endDate).format('YYYY-MM-DD HH:mm:ss'),
            usedDataNumber: getRandIntNumberFromRange(100, 10000),
        });
    }
    return operatorContracts;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'operatorId', title: 'id_opertora' },
    { id: 'startDate', title: 'data_rozpoczecia_umowy' },
    { id: 'endDate', title: 'data_zakonczenia_umowy' },
    { id: 'usedDataNumber', title: 'ilosc_wykorzystanych_danych' },
];

const createCsvForOperatorContracts = async (addresses) => {
    await createCsv('umowy_operatora', headers, addresses);
};

module.exports = {
    operatorContracts: async (operators, count) =>
        await generateRandomOperatorContracts(operators, count),
    createCsvForOperatorContracts,
};
