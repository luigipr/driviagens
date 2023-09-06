import joi from "joi"


const schemaCities = joi.object({
    name: joi.string().min(2).max(50)
}).allow("id", "name")

export default schemaCities