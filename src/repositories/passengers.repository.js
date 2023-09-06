import db from "../databases/database.js";

export async function passengerPost(firstName, lastName) {
    return await db.query(`INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2)`, [firstName, lastName]); 
} 