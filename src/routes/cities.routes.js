import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import schemaCities from "../schemas/citiesSchema.js";
import { citiesController } from "../controllers/cities.controller.js";


const citiesRouter = Router()

citiesRouter.post('/cities', validateSchema(schemaCities), citiesController.create)


export default  citiesRouter