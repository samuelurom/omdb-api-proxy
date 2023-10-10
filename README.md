# OMDB API Proxy

This simple Node.js server acts as a proxy for the OMDB (The Open Movie Database) API, providing two REST endpoints for fetching movie data, securely, without exposing your OMDB API key to the client.

## Endpoints

1. **Get Single Movie Data**

   - Endpoint: GET `/movie/:title`
   - Example usage: `/movie/Inception`

2. **Get Multiple Movies Data**
   - Endpoint: GET `/movies/:search-term`
   - Example usage: `/movies/Interstellar`

## Important

Create an OMDB API key by signing up at https://www.omdbapi.com/apikey.aspx. Once obtained, copy `.env.sample` to a new file named `.env` and replace `OMDB_API_KEY` with your actual OMDB API key.
