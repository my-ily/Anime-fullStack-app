import express from 'express'
import axios from 'axios'
import cors from 'cors'

const app = express()
const PORT = 5051
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send("hello")
})



app.get("/anime", async (req, res) => {
  try {
    const { page = 1, limit = 25 } = req.query;
    const response = await axios.get(`https://api.jikan.moe/v4/top/anime?page=${page}&limit=${limit}`);
    res.json(response.data)
  } catch (err) {
    console.error("Error fetching anime:", err.message)
    res.status(500).json({ error: "Failed to fetch anime data", details: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
