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

export const flightsController = {create}