import db from "../databases/database.js";
import { internalServerError } from "../errors/internalServer.js";

async function create(firstName, lastName) {
    return await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName]); 
} 

async function getPassengerById (passengerId) {
    const passenger = await db.query(`SELECT * FROM passengers WHERE id = $1`, [passengerId])
    return passenger.rows[0]
}

async function getTravels(name, page) {

    let qtd = 10;
    let baseQuery = `SELECT passengers."firstName", passengers."lastName", COUNT(travels.id) AS travels FROM passengers JOIN travels ON 
    passengers.id = travels."passengerId"`;
    const params = [];
    if (name) {
        baseQuery += `WHERE passengers."firstName" ILIKE $${params.length + 1} OR passengers."lastName" ILIKE $${params.length + 1}`;
        params.push(`%${name}%`) 
    }
    baseQuery += `GROUP BY passengers.id ORDER BY travels DESC`;

    if (typeof(page) === 'string' || page <= 0) throw badRequestError('page')

    if (page) {
        baseQuery += ` ORDER BY flights.date LIMIT ${qtd} OFFSET $${params.length + 1}`;
        params.push((page - 1) * qtd);
    } else {
        baseQuery += ` ORDER BY flights.date LIMIT ${qtd}`
    }
    
    const travels = await db.query(baseQuery, params);

    if (travels.rowCount > 10) throw internalServerError();

    const tableTravels = travels.rows.map(travel => {return {passenger: travel.firstName + " " + travel.lastName, travels: travel.travels}})

    return tableTravels
}

export const passengerRepository = {create, getPassengerById, getTravels}