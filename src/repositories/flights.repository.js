import db from "../databases/database.js";
import { badRequestError } from "../errors/badRequest.js";

async function create(origin, destination, date) {
    return await db.query(`INSERT INTO flights(origin, destination, date) VALUES ($1, $2, $3)`, [origin, destination, date]);
} 

async function getFlightById (flightId) {
    const flight = await db.query(`SELECT * FROM flights WHERE id = $1`, [flightId])
    return flight.rows[0];
}

async function getFlights(origin, destination, smallerDate, biggerDate, page) {
    const qtd = 10;
    let query = '';
    const params = []

    let baseQuery = `
        SELECT flights.id, origin.name AS origin, destination.name AS destination, 
        TO_CHAR(flights.date, 'DD-MM-YYYY') AS date FROM flights JOIN cities AS origin 
        ON flights.origin = origin.id JOIN cities AS destination ON flights.destination = destination.id
    `;

    if (origin) {
        query += `WHERE origin.name = $${params.length + 1}`
        params.push(origin);
    }
    if (destination) {
        query += `${origin ? 'AND':'WHERE'} destination.name = $${params.length + 1}`;
        params.push(destination)
    }
    if (smallerDate || biggerDate) {
        query += `${origin ||destination ? 'AND' : 'WHERE'} flights.date BETWEEN $${params.length + 1} AND $${params.length + 2}`;
        params.push(smallerDate, biggerDate);
    }

    query += `ORDER BY flights.date`

    if (typeof(page) === 'string' || page <= 0) throw badRequestError('page')

    if (page) {
        query += ` ORDER BY flights.date LIMIT ${qtd} OFFSET $${params.length + 1}`;
        params.push((page - 1) * qtd);
    }

    return await db.query((baseQuery + query), params)
}

export const flightsRepository = {create, getFlightById, getFlights}