import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Poster.css'

function Poster({ movies }) {

  let moviesRow1 = movies.slice(0, 15)
  let moviesRow2 = movies.slice(15, 29)
  let moviesRow3 = movies.slice(29, 40)

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

// Poster.propTypes = {
//   movies: propTypes.array.isRequired,
// }
