require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

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

app.listen(port, () => console.log(`server running on port ${port}`));
