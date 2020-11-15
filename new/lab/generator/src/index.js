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

const cars = Car.cars(2500);
Car.createCsvForCars(cars);

const addresses = Address.addresses(2500);
Address.createCsvForAddresses(addresses);

const crimes = Crimes.crimes();
Crimes.createCsvForCrime(crimes);

const operators = Operators.operators();
Operators.createCsvForOperators(operators);

const legalForms = LegalForms.legalForms();
LegalForms.createCsvForLegalForms(legalForms);

const calls = Calls.calls(2500);
Calls.createCsvForCalls(calls);

// ------------------------------------------------

const operatorContracts = OperatorContracts.operatorContracts(operators, 2500);
OperatorContracts.createCsvForOperatorContracts(operatorContracts);

const telecommunicationsAddresses = TelecommunicationsAddresses.telecommunicationsAddresses(
    operatorContracts,
);
TelecommunicationsAddresses.createCsvForTelecommunicationsAddresses(
    telecommunicationsAddresses,
);

const krs = Krs.krs(legalForms, 2500);
Krs.createCsvForKrs(krs);

const criminals = Criminals.criminals(addresses, 2500);
Criminals.createCsvForCriminals(criminals);

const suspects = Suspects.suspects(
    criminals,
    cars,
    crimes,
    telecommunicationsAddresses,
    calls,
    krs,
    5000,
);
Suspects.createCsvForSuspects(suspects);
