import { conflictError } from "../errors/conflict.js";
import { citiesRepository } from "../repositories/cities.repository.js";

async function validateCity(name) {
    const city = await citiesRepository.findCity(name)
    //console.log(city)

    if (city) throw conflictError("city")
    //return false
    //if (!city) throw alreadyExists("city");

    return true
    //if (city !== []) return true
    //return false
}

export const citiesServices = {validateCity}