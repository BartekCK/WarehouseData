const { getRandIntNumberFromRange, createCsv } = require('../utils/utils');
const moment = require('moment');
const axios = require('axios');
const { getDistance } = require('geolib');

const generateRandomCourses = async (count, roads, cars, employees, times) => {
    const courses = [];
    for (let i = 0; i < count; i++) {
        const road = roads[getRandIntNumberFromRange(0, roads.length)];
        const car = cars[getRandIntNumberFromRange(0, cars.length)];
        const countAdultTicket = getRandIntNumberFromRange(0, car.countPlace + 1);
        const countNormalTicker = getRandIntNumberFromRange(
            0,
            car.countPlace - countAdultTicket + 1,
        );
        const fillLevel = (countAdultTicket + countNormalTicker) / car.countPlace;
        ////////////
        const time = times[getRandIntNumberFromRange(0, times.length)];
        const start = moment.utc(time.timeStart, 'HH:mm'); // NOT
        const end = moment.utc(time.timeEnd, 'HH:mm'); // NOT
        if (end.isBefore(start)) end.add(1, 'day'); // NOT
        const d = moment.duration(end.diff(start)); // NOT
        d.subtract(30, 'minutes'); // NOT
        const timeRoad = moment.utc(+d).format('H:mm');
        /////////////////
        const priceAdult = countAdultTicket * road.priceAdult;
        const priceNormal = countNormalTicker * road.priceNormal;

        ///////
        const hours = moment(timeRoad, 'H:mm').hours();
        const minutes = moment(timeRoad, 'H:mm').minutes();
        const seconds = hours * 3600 + minutes * 60;
        const roadLength = (20 * seconds) / 1000;

        courses.push({
            id: i + 1,
            roadID: road.id,
            carID: car.id,
            employeeID: employees[getRandIntNumberFromRange(0, employees.length)].id,
            timeID: time.id,
            countAdultTicket,
            countNormalTicker,
            timeRoad,
            fillLevel,
            roadLength,
            salary: priceAdult + priceNormal,
        });
    }
    return courses;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'roadID', title: 'id_trasy' },
    { id: 'carID', title: 'id_pojazdu' },
    { id: 'employeeID', title: 'id_pracownika' },
    { id: 'timeID', title: 'id_czasu' },
    { id: 'countAdultTicket', title: 'ilosc_biletow_nor' },
    { id: 'countNormalTicker', title: 'ilosc_biletow_ulg' },
    { id: 'timeRoad', title: 'czas_przejazdu' },
    { id: 'fillLevel', title: 'poziom_wypelnienia' },
    { id: 'roadLength', title: 'odleglosc' },
    { id: 'salary', title: 'przychod' },
];

const createCsvForCourses = async (courses) => {
    await createCsv('kursy', headers, courses);
};

module.exports = {
    courses: async (count, roads, cars, employees, times) =>
        await generateRandomCourses(count, roads, cars, employees, times),
    createCsvForCourses,
};
