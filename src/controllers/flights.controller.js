import { flightsRepository } from "../repositories/flights.repository.js";
import { citiesServices } from "../services/cities.service.js";
import { flightsServices } from "../services/flights.service.js";


export async function create (req, res) {

    const { origin, destination, date } = req.body;

        await flightsServices.CityVeryfier(origin);
        await flightsServices.CityVeryfier(destination)
        const flightDate = flightsServices.checkDate(date)
        flightsServices.samePlace(origin, destination)


        await flightsRepository.create(origin, destination, flightDate)

        res.sendStatus(201);
}


export async function getFlights (req, res) {
    //const {origin, destination, biggerDate, smallerDate, page}   = req.params
    const smallerDate = req.query['smaller-date'];
    const biggerDate = req.query['bigger-date'];
    const origin = req.query.origin;
    const destination = req.query.destination;
    const page = req.query.page;

    //if ((smallerDate && !biggerDate) || ())
    //await flightsServices.CityVeryfier(origin);

    flightsServices.checkQueries(smallerDate, biggerDate)

    const flights = await flightsRepository.getFlights(origin, destination, smallerDate, biggerDate, page);

    res.status(200).send(flights.rows);
}

export const flightsController = {create, getFlights}