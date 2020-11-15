const { createRandomIp, createCsv } = require('../utils/utils');

const generateRandomTelecommunicationsAddresses = (operatorContracts) => {
    return operatorContracts.map((contract, id) => ({
        id: id + 1,
        routerAddress: createRandomIp(),
        contractID: contract.id,
    }));
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'routerAddress', title: 'adres_routera' },
    { id: 'contractID', title: 'id_umowy' },
];

const createCsvForTelecommunicationsAddresses = (telecommunicationsAddresses) => {
    createCsv('adresy-telekomunikacyjne', headers, telecommunicationsAddresses);
};

module.exports = {
    telecommunicationsAddresses: (operatorContracts) =>
        generateRandomTelecommunicationsAddresses(operatorContracts),
    createCsvForTelecommunicationsAddresses,
};
