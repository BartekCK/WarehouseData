const IdentityCards = require('./models/identityCards.generate');
const Drivers = require('./models/drivers.generate');
const Addresses = require('./models/address.generate');
const Employees = require('./models/employees.generate');
const Roads = require('./models/roads.generate');
const Times = require('./models/time.generate');
const Cars = require('./models/cars.generate');
const Courses = require('./models/courses.generate');

const startApp = async () => {
    const identityCards = await IdentityCards.identityCards(2500);
    await IdentityCards.createCsvForIdentityCards(identityCards);

    const drivers = await Drivers.drivers(identityCards);
    await Drivers.createCsvForDrivers(drivers);

    const addresses = await Addresses.addresses(2500);
    await Addresses.createCsvForAddresses(addresses);

    const employees = await Employees.employees(drivers, addresses);
    await Employees.createCsvForEmployees(employees);

    //-------------------------
    const roads = await Roads.roads(2500);
    await Roads.createCsvForRoads(roads);

    const times = await Times.times(2500);
    await Times.createCsvForTimes(times);

    const cars = await Cars.cars(2500);
    await Cars.createCsvForCars(cars);

    //-------
    const courses = await Courses.courses(5000, roads, cars, employees, times);
    await Courses.createCsvForCourses(courses);
};

startApp();
