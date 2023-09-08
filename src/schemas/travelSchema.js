import joi from "joi"

const schemaTravels = joi.object({
    passengerId: joi.number().required(),
	flightId: joi.number().required()
}).allow("passengerId", "flightId")

export default schemaTravels