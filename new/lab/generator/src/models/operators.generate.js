const allOperators = require('../data/operators.json');
const { createCsv } = require('../utils/utils');

const generateRandomOperators = async () => {
    return allOperators.map((operatorName, id) => ({ id: id + 1, operatorName }));
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'operatorName', title: 'nazwa' },
];

const createCsvForOperators = async (operators) => {
    await createCsv('operatorzy', headers, operators);
};

module.exports = {
    operators: async () => await generateRandomOperators(),
    createCsvForOperators,
};
