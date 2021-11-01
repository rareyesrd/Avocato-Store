import { IncomingMessage, ServerResponse } from "http";
import Database from "database/db";

const allAvos =  
async (request: IncomingMessage, response: ServerResponse) => {
    const db = new Database();
    const allEntries = await db.getAll();
    const length = allEntries.length;
    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET');
    response.end(JSON.stringify({data: allEntries, length}))
}

export default allAvos; 