import joi from "joi"
import DateExtension from '@joi/date';
const Joi = joi.extend(DateExtension);


const schemaFlights = Joi.object({
    origin : Joi.number().required(),
    destination: Joi.number().required(),
    date: Joi.date().format('DD-MM-YYYY').required()
}).allow("origin", "destination", "date")

export default schemaFlights