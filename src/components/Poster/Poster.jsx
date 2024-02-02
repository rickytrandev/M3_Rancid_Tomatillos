import React, {useState} from 'react'
import './Poster.css'

function Poster({movies}) {
  const [isMousedOver, setMouseOver] = useState(false)
  function setTrue() {
    setMouseOver(true)
  }

  return (
    <div className="poster-wrapper">
      {movies.map(movie => (
        <img onMouseOver={setTrue} className={`poster ${isMousedOver && 'pointer-cursor'}`} src={movie.poster_path} alt={`${movie.title} movie poster`} />
      ))}
    </div>
  )
}

export default Poster