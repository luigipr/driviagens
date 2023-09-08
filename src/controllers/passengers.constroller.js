import { passengerRepository } from "../repositories/passengers.repository.js";


async function create (req, res) {

    const { firstName, lastName } = req.body;

    try{

        await passengerRepository.create(firstName, lastName)

        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message)
    }

}




export const passengercontroller = {create}