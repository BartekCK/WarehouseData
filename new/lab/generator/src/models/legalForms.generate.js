const allLegalForms = require('../data/legalForms.json');
const { createCsv } = require('../utils/utils');

const generateRandomLegalForms = () => {
    return allLegalForms.map((legalForm, id) => ({ id: id + 1, legalForm }));
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'legalForm', title: 'opis' },
];

const createCsvForLegalForms = (crimes) => {
    createCsv('formy-prawne', headers, crimes);
};

module.exports = {
    legalForms: () => generateRandomLegalForms(),
    createCsvForLegalForms,
};
