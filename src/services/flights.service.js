import { conflictError } from "../errors/conflict.js";
import { notFoundError } from "../errors/notFound.js";
import { unprocessableError } from "../errors/unprocessable.js";
import { citiesRepository } from "../repositories/cities.repository.js";
import dayjs from "dayjs";

async function CityVeryfier(id) {

    const city = await citiesRepository.findCityById(id)
    //console.log(city)

    if (!city) throw notFoundError("city")
    //return false
    //if (!city) throw alreadyExists("city");

    return true
    //if (city !== []) return true
    //return false
}

function formatDate(date) {
    const dateParts = date.split("-");
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}

function checkDate(date) {
    //const date =  (dayjs().format('YYYY-MM-DD'));
    console.log(date)
    const today = dayjs().format('YYYY-MM-DD');
    //const date2 = dayjs(date).format('DD-MM-YYYY')
    console.log(today)
    //console.log(date2)
    //const flightDate = dayjs(date).format('YYYY-MM-DD')
    const flightDate = formatDate(date);
    //dayjs(date, 'DD-MM-YYYY').format('YYYY-MM-DD');
    const conta = dayjs(flightDate).diff(today);
    //const conta = today.diff(date, 'day')
    console.log(flightDate)
    console.log(conta)
    console.log(typeof(conta))
    console.log(typeof(date))
    
    //const flightDay = dayjs(date).diff(today, 'day');
    if (conta < 0) throw unprocessableError("date")

    return flightDate
}

function samePlace(origin, destination) {
    if (origin === destination) throw conflictError("destination")
    return
}

export const flightsServices = {CityVeryfier, checkDate, samePlace, formatDate}