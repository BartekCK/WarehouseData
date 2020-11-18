const IdentityCards = require('./models/identityCards.generate');
const Drivers = require('./models/drivers.generate');
const Addresses = require('./models/address.generate');
const Employees = require('./models/employees.generate');
const Roads = require('./models/roads.generate');
const Times = require('./models/time.generate');
const Cars = require('./models/cars.generate');
const Courses = require('./models/courses.generate');

const identityCards = IdentityCards.identityCards(2500);
IdentityCards.createCsvForIdentityCards(identityCards);

const drivers = Drivers.drivers(identityCards);
Drivers.createCsvForDrivers(drivers);

const addresses = Addresses.addresses(2500);
Addresses.createCsvForAddresses(addresses);

const employees = Employees.employees(drivers, addresses);
Employees.createCsvForEmployees(employees);

//-------------------------
const roads = Roads.roads(2500);
Roads.createCsvForRoads(roads);

const times = Times.times(2500);
Times.createCsvForTimes(times);

const cars = Cars.cars(2500);
Cars.createCsvForCars(cars);

//-------
const courses = Courses.courses(40, roads, cars, employees, times);
Courses.createCsvForCourses(courses);
