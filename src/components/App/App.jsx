import React, { useState, useEffect, createRef } from 'react';
import './App.css';
import movieData from '../../Data/Data';
import Poster from '../Poster/Poster';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  const [movies, setMovies] = useState(movieData)
  const [currentPoster, setCurrentPoster] = useState({})

  // set up event listener for each poster onClick
  // when user clicks on a movie, that movie is now the currentPoster.
  // create MovieDetails component
  // use currentPoster to pass into MovieDetails comp.
  // use conditional logic. if currentPoster is not empty, render the MovieDetails component. 

  function updateCurrentPoster(movie) {
    setCurrentPoster(movie)
  }

    // useEffect(() => {
    //   console.log(currentPoster);
    // }, [currentPoster])

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

