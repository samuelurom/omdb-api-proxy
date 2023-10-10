require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Init express
const app = express();
const port = process.env.PORT || 8080;

// Middleware
const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// GET /api/movie/:title
app.get("/movie/:title", async (req, res) => {
  const movieTitle = req.params.title;
  const omdbUrl = `https://omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${movieTitle}`;

  try {
    const omdbResponse = await fetch(omdbUrl);
    const omdbData = await omdbResponse.json();

    if (omdbData) {
      res.json(omdbData);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occured while fetching data from OMDB API" });
  }
});

// GET /api/movies/:search
app.get("/movies/:search", async (req, res) => {
  const searchTerm = req.params.search;
  const omdbUrl = `https://omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${searchTerm}`;

  try {
    const omdbResponse = await fetch(omdbUrl);
    const omdbData = await omdbResponse.json();

    if (omdbData) {
      res.json(omdbData);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occured while fetching data from OMDB API" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
