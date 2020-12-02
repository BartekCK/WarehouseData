const allLegalForms = require('../data/legalForms.json');
const { createCsv } = require('../utils/utils');

const generateRandomLegalForms = async () => {
    return allLegalForms.map((legalForm, id) => ({ id: id + 1, legalForm }));
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'legalForm', title: 'opis' },
];

const createCsvForLegalForms = async (crimes) => {
    await createCsv('formy_prawne', headers, crimes);
};

module.exports = {
    legalForms: async () => await generateRandomLegalForms(),
    createCsvForLegalForms,
};
