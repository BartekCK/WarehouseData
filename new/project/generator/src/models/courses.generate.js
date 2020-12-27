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
        let hours;
        let minutes;
        minutes = time.timeEndMinutes - time.timeStartMinutes;
        if(minutes < 0){
            hours = time.timeEndHour - time.timeStartHour - 1;
            minutes += 60;
        }else {
            hours = time.timeEndHour - time.timeStartHour;
        }
        /////////////////
        const priceAdult = countAdultTicket * road.priceAdult;
        const priceNormal = countNormalTicker * road.priceNormal;

        ///////
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
            timeRoadHours: hours,
            timeRoadMinutes: minutes,
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
    { id: 'timeRoadHours', title: 'godzina_przejazdu' },
    { id: 'timeRoadMinutes', title: 'minuty_przejazdu' },
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
