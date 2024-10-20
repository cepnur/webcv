export default async function handler(req, res) {
  const { name, country } = req.query; // Mendapatkan parameter country dari request

  const apiUrl = `http://universities.hipolabs.com/search?name=${name}&country=${country}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.status(200).json(data); // Kirimkan data kembali ke frontend Vue.js
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from Hipolabs API" });
  }
}
