import React, { useState, useEffect, createRef } from 'react';
import './App.css';
import Poster from '../Poster/Poster';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {

    const [movies, setMovies] = useState([])
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

