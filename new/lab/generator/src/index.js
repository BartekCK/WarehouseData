const Car = require('./models/cars.generate');
const Address = require('./models/address.generate');
const Crimes = require('./models/crimes.generate');
const Operators = require('./models/operators.generate');
const LegalForms = require('./models/legalForms.generate');
const Calls = require('./models/calls.generate');
const OperatorContracts = require('./models/operatorContracts.generate');
const TelecommunicationsAddresses = require('./models/telecommunicationsAddresses.generate');
const Krs = require('./models/krs.generate');
const Criminals = require('./models/criminals.generate');
const Suspects = require('./models/suspects.generate');

const startApp = async () => {
    const cars = await Car.cars(2500);
    await Car.createCsvForCars(cars);

    const addresses = await Address.addresses(2500);
    await Address.createCsvForAddresses(addresses);

    const crimes = await Crimes.crimes();
    await Crimes.createCsvForCrime(crimes);

    const operators = await Operators.operators();
    await Operators.createCsvForOperators(operators);

    const legalForms = await LegalForms.legalForms();
    await LegalForms.createCsvForLegalForms(legalForms);

    const calls = await Calls.calls(2500);
    await Calls.createCsvForCalls(calls);

    // ------------------------------------------------

    const operatorContracts = await OperatorContracts.operatorContracts(
        operators,
        2500,
    );
    await OperatorContracts.createCsvForOperatorContracts(operatorContracts);

    const telecommunicationsAddresses = await TelecommunicationsAddresses.telecommunicationsAddresses(
        operatorContracts,
    );
    await TelecommunicationsAddresses.createCsvForTelecommunicationsAddresses(
        telecommunicationsAddresses,
    );

    const krs = await Krs.krs(legalForms, 2500);
    await Krs.createCsvForKrs(krs);

    const criminals = await Criminals.criminals(addresses, 2500);
    await Criminals.createCsvForCriminals(criminals);

    const suspects = await Suspects.suspects(
        criminals,
        cars,
        crimes,
        telecommunicationsAddresses,
        calls,
        krs,
        5000,
    );
    await Suspects.createCsvForSuspects(suspects);
};

startApp().then(() => console.log('Tables generated'));
