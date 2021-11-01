import { NextApiRequest, NextApiResponse } from "next";
import Database from "database/db";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const db = new Database();
    const avoId = request.query.id as string;
    const avo = await db.getById(avoId);
    response.status(200).json(avo);
  } catch (e) {
    console.error(e);
    response.status(404).end();
  }
};

export default allAvos;
