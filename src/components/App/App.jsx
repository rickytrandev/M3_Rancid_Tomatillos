import React, { useState, useEffect } from 'react';
import './App.css';
import MovieDetails from '../MovieDetails/MovieDetails';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';

function App() {
  const [movies, setMovies] = useState([]);

  function getAllMovies() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => {
        if (!response.ok) {
          if (response.status === 500) {
            throw new Error('Internal Server Error')
          } else {
            throw new Error('Please try again later.')
          }
        }
        return response.json()
      })
      .then(data => setMovies(data.movies))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home movies={movies} />} />
        <Route path='/movie-details/:id' element={<MovieDetails movies={movies} />} />
      </Routes>
    </main>
  );
}

export default App;
