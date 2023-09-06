import db from "../databases/database.js";

export async function cityPost(name) {
    try {
        const result = await db.query(`INSERT INTO cities (name) VALUES ($1)`, [name]); 
    } catch (error) {
        console.error("Error querying city:", error);
        throw error;
    }
} 

// export async function findCity(name) {
//     return await db.query(`SELECT * FROM cities WHERE name = $1`, [name])
// }

export async function findCity(name) {
    try {
        const result = await db.query(`SELECT * FROM cities WHERE name = $1`, [name]);
        return result.rows[0];
    } catch (error) {
        console.error("Error querying city:", error);
        throw error;
    }
}

export const citiesRepository = {cityPost, findCity}