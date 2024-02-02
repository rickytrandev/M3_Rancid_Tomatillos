import React, { useState, useEffect } from 'react';
import './App.css';
import Poster from '../Poster/Poster';

function App() {
  const [movies, setMovies] = useState([])

  function getAllMovies() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => setMovies(data.movies))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getAllMovies()
  }, [])

  return (
    <main>
      <Poster
        movies={movies}
      />
    </main>
  )
}

export default App
