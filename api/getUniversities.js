// File: api/getUniversities.js
import axios from "axios";

export default async function handler(req, res) {
  const { name } = req.query;

  try {
    const response = await axios.get(`http://universities.hipolabs.com/search`, {
      params: { name },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
}
