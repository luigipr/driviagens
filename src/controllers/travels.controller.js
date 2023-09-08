import { travelsRepository } from "../repositories/travels.repository.js";
import { travelServices } from "../services/travels.service.js";


async function create (req, res) {

    const {passengerId, flightId} = req.body;

        travelServices.travelVerifier(passengerId, flightId)

        await travelsRepository.create(passengerId, flightId)

        res.sendStatus(201);

}

export const travelscontroller = {create}