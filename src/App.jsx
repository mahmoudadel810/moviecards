/** @format */

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import moviesData from "./data/moviesData";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = (searchTerm) => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleDelete = (movieId) => {
    const updatedMovies = movies.filter(movie => movie.id !== movieId);
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route 
            path="/" 
            element={
              <MoviesList 
                movies={filteredMovies} 
                onDelete={handleDelete} 
              />
            } 
          />
          <Route 
            path="/movie/:id" 
            element={<MovieDetails movies={movies} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
