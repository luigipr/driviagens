import db from "../databases/database.js";

async function create(firstName, lastName) {
    return await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName]); 
} 

export const passengerRepository = {create}