import { findCity } from "../repositories/cities.repository.js";

export async function validateCity(name) {
    try{
    const city = await findCity(name)
    console.log(city)

    if (!city) return false
    //if (!city) throw alreadyExists("city");

    return true
    //if (city !== []) return true
    //return false
    } catch (error) {
        console.error("Error validating city:", error);
        return false; 
    }
}