const Car = require('./models/cars.generate');

const cars = Car.cars(500);
Car.createCsvForCars(cars);
