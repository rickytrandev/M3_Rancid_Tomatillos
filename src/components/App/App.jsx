import React, { useState, useEffect, createRef } from 'react';
import './App.css';
import movieData from '../../Data/Data';
import Poster from '../Poster/Poster';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  const [movies, setMovies] = useState(movieData)
  const [currentPoster, setCurrentPoster] = useState({})

  function updateCurrentPoster(movie) {
    setCurrentPoster(movie)
  }

  return (
    <main>
      {Object.keys(currentPoster).length ? 
        <MovieDetails 
          id ={currentPoster.id}
          title = {currentPoster.title}
          poster_path = {currentPoster.poster_path}
          backdrop_path = {currentPoster.backdrop_path}
          average_rating = {currentPoster.average_rating}
          release_date = {currentPoster.release_date}
        /> 
        : 
        <Poster 
          movies = {movies.movies}
          updateCurrentPoster = {updateCurrentPoster}
        />
      }
    </main>
  )
}

export default App

