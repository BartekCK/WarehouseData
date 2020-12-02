const { createRandomIp, createCsv } = require('../utils/utils');

const generateRandomTelecommunicationsAddresses = async (operatorContracts) => {
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

const createCsvForTelecommunicationsAddresses = async (
    telecommunicationsAddresses,
) => {
    await createCsv(
        'adresy_telekomunikacyjne',
        headers,
        telecommunicationsAddresses,
    );
};

module.exports = {
    telecommunicationsAddresses: async (operatorContracts) =>
        await generateRandomTelecommunicationsAddresses(operatorContracts),
    createCsvForTelecommunicationsAddresses,
};
