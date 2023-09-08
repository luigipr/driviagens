import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import schemaTravels from "../schemas/travelSchema.js";
import { travelscontroller } from "../controllers/travels.controller.js";


const travelsRouter = Router()

travelsRouter.post('/travels', validateSchema(schemaTravels), travelscontroller.create)


export default  travelsRouter