import { citiesRepository } from "../repositories/cities.repository.js";
import { citiesServices } from "../services/cities.service.js";


export async function create (req, res) {

    const { name } = req.body;

        await citiesServices.validateCity(name)


        await citiesRepository.create(name)

        res.sendStatus(201);

}

export const citiesController = {create}