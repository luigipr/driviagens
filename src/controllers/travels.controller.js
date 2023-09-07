import { travelsRepository } from "../repositories/travels.repository.js";


async function create (req, res) {

    const {passengerId, flightId} = req.body;

    try{
        

        await travelsRepository.create(passengerId, flightId)

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message)
    }

}

export const travelscontroller = {create}