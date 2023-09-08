import db from "../databases/database.js";

async function create(firstName, lastName) {
    return await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName]); 
} 

async function getPassengerById (passengerId) {
    const passenger = await db.query(`SELECT * FROM passengers WHERE id = $1`, [passengerId])
    return passenger.rows[0]
}

export const passengerRepository = {create, getPassengerById}