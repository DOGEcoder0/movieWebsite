import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
//import { useState } from "react";

import "./App.css";
import Searchicon from "./search.svg";

//b196ff1b

const API_URL = "http://www.omdbapi.com?apikey=b196ff1b";

const movie1 = {
  title: "spiderman",
  year: "2012",
  imdbID: "tt2586634",
  poster: "N/A",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="App">
      <h1>Movieland</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>no movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
