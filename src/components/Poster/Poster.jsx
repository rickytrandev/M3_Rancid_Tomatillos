import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Poster.css'
import { PropTypes } from 'prop-types'


function Poster({ movies }) {

  const [isMousedOver, setMouseOver] = useState(false)
  function setTrue() {
    setMouseOver(true)
  }

  return (
    <div className="posters-wrapper">
      {movies.map(movie => (
        <Link to={`/movie-details/${movie.id}`} >
          <img
            id={movie.id}
            key={movie.id}
            onMouseOver={setTrue}
            className={`poster ${isMousedOver && 'pointer-cursor'}`}
            src={movie.poster_path}
            alt={`${movie.title} movie poster`}
          />
        </Link>
      ))}
    </div>
  )
}

export default Poster

Poster.propTypes = {
  movies: PropTypes.array.isRequired,
}
