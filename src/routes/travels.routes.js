import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import schemaFlights from "../schemas/flightsSchema.js";
import { flightsController } from "../controllers/flights.controller.js";


const travelsRouter = Router()

travelsRouter.post('/travels', validateSchema(schemaTravels), travelsController.create)


export default  travelsRouter