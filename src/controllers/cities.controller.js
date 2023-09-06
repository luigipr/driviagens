import { cityPost } from "../repositories/cities.repository.js";
import { validateCity } from "../services/cities.service.js";


export async function postCity (req, res) {

    const { name } = req.body;

    try{

        if (await validateCity(name)) { 
            console.log(validateCity(name))
            return res.sendStatus(409) }
        else {


        await cityPost(name)

        res.sendStatus(201);
        }
    } catch (err) {
        res.status(500).send(err.message)
    }

}

//export const citiesController = {create}