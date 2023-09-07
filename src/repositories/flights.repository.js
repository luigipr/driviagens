import db from "../databases/database.js";

async function create(origin, destination, date) {
    return await db.query(`INSERT INTO flights(origin, destination, date) VALUES ($1, $2, $3)`, [origin, destination, date]); 
} 

export const flightsRepository = {create}