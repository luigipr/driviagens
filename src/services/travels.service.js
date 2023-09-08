import { flightsRepository } from "../repositories/flights.repository.js"
import { passengerRepository } from "../repositories/passengers.repository.js"



function travelVerifier(passengerId, flightId) {
    
    const flight = flightsRepository.getFlightById(flightId);
    const passenger = passengerRepository.getPassengerById(passengerId);

    if (!flight || !passenger) throw notFoundError("flight or passenger")

}

export const travelServices = {travelVerifier}