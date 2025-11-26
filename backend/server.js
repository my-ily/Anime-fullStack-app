import express from 'express'
import axios from 'axios'

const app = express()
const PORT = 5051
app.use(express.json())

app.get('/', (req, res) => {
  res.send("hello")
})

app.get("/anime", async (req, res) => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime');
    res.json(response.data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Failed to fetch anime data" })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
