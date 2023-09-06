import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import schemaPassenger from "../schemas/passengerSchema.js";
import { passengercontroller } from "../controllers/passengers.constroller.js";


const passengerRouter = Router()

passengerRouter.post('/passengers', validateSchema(schemaPassenger), passengercontroller.create)
passengerRouter.get('/passengers/travels',)



export default  passengerRouter