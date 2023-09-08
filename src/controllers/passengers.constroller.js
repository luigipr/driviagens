import { notFoundError } from "../errors/notFound.js";
import { passengerRepository } from "../repositories/passengers.repository.js";


async function create (req, res) {

    const { firstName, lastName } = req.body;

        await passengerRepository.create(firstName, lastName)

        res.sendStatus(201);

}

async function getPassengerTravels(req, res) {

    const name = req.query.name;
    //console.log(name)
    if(!name) throw notFoundError("name")

    const passengerTravels = await passengerRepository.getTravels(name);
    //console.log(passengerTravels)
    res.status(200).send(passengerTravels)
}



export const passengercontroller = {create, getPassengerTravels}