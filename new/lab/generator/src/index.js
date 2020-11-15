const Car = require('./models/cars.generate');
const Address = require('./models/address.generate');
const Crimes = require('./models/crimes.generate');
const Operators = require('./models/operators.generate');
const LegalForms = require('./models/legalForms.generate');
const Calls = require('./models/calls.generate');

const cars = Car.cars(500);
Car.createCsvForCars(cars);

const addresses = Address.addresses(500);
Address.createCsvForAddresses(addresses);

const crimes = Crimes.crimes();
Crimes.createCsvForCrime(crimes);

const operators = Operators.operators();
Operators.createCsvForOperators(operators);

const legalForms = LegalForms.legalForms();
LegalForms.createCsvForLegalForms(legalForms);

const calls = Calls.calls(500);
Calls.createCsvForCalls(calls);
