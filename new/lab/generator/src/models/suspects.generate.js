const {
    getRandIntNumberFromRange,
    createCsv,
    getRandomDate,
    getMaxDate,
} = require('../utils/utils');
const moment = require('moment');

const generateRandomSuspects = (
    criminals,
    cars,
    crimes,
    telecommunicationsAddresses,
    calls,
    krs,
    count,
) => {
    const suspects = [];
    for (let i = 0; i < count; i++) {
        const suspect = {
            id: i + 1,
            criminalID: criminals[getRandIntNumberFromRange(0, criminals.length)].id,
            carID: cars[getRandIntNumberFromRange(0, cars.length)].id,
            crimeID: crimes[getRandIntNumberFromRange(0, crimes.length)].id,
            telecommunicationsAddressesID:
                telecommunicationsAddresses[
                    getRandIntNumberFromRange(0, telecommunicationsAddresses.length)
                ].id,
            callsID: calls[getRandIntNumberFromRange(0, calls.length)].id,
            krsID: krs[getRandIntNumberFromRange(0, krs.length)].id,
            isOnCriminalPlace: getRandIntNumberFromRange(0, 2),
            numberOfYear: 0,
            startTime: 'null',
            endTime: 'null',
        };
        if (getRandIntNumberFromRange(1, 5) === 1) {
            const startTime = getRandomDate(
                new Date(1990, 0, 1),
                new Date(Date.now()),
            );
            const endTime = getRandomDate(startTime, getMaxDate(startTime, 3, 0, 0));
            const numberOfYear = endTime.getFullYear() - startTime.getFullYear();

            suspect.startTime = moment(startTime).format('YYYY-MM-DD');
            suspect.endTime = moment(endTime).format('YYYY-MM-DD');
            suspect.numberOfYear = numberOfYear === 0 ? 1 : numberOfYear;
        }
        suspects.push(suspect);
    }
    return suspects;
};

const headers = [
    { id: 'id', title: 'id' },
    { id: 'criminalID', title: 'id_przestepcy' },
    { id: 'carID', title: 'id_pojazdu' },
    { id: 'crimeID', title: 'id_przestepstwa' },
    { id: 'telecommunicationsAddressesID', title: 'id_adresu_ip' },
    { id: 'callsID', title: 'id_adresu_polaczenia' },
    { id: 'krsID', title: 'id_krs' },
    { id: 'isOnCriminalPlace', title: 'obecnosc_na_miejscu_zbrodni' },
    { id: 'numberOfYear', title: 'liczba_lat_wyroku' },
    { id: 'startTime', title: 'rozpoczecie_pozbawienia_wolnosci' },
    { id: 'endTime', title: 'zakonczenie_pozbawienia_wolnosci'},
];

const createCsvForSuspects = (suspects) => {
    createCsv('podejrzani', headers, suspects);
};

module.exports = {
    suspects: (
        criminals,
        cars,
        crimes,
        telecommunicationsAddresses,
        calls,
        krs,
        count,
    ) =>
        generateRandomSuspects(
            criminals,
            cars,
            crimes,
            telecommunicationsAddresses,
            calls,
            krs,
            count,
        ),
    createCsvForSuspects,
};
