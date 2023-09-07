import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import schemaFlights from "../schemas/flightsSchema.js";
import { flightsController } from "../controllers/flights.controller.js";


const flightsRouter = Router()

flightsRouter.post('/flights', validateSchema(schemaFlights), flightsController.create)


export default  flightsRouter