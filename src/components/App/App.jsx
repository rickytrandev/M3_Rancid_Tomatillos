import React, { useState } from 'react';
import './App.css';
import movieData from '../../Data/Data';
import Poster from '../Poster/Poster';

function App() {
  const [movies, setMovies] = useState(movieData)

  return (
    <main>
      <Poster 
        movies = {movies.movies}
      />
    </main>
  )
}

export default App
