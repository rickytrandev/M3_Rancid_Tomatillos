import React, {useState} from 'react'
import './Poster.css'

function Poster({movies, updateCurrentPoster}) {
  const [isMousedOver, setMouseOver] = useState(false)

  function setTrue() {
    setMouseOver(true)
  }

  return (
    <div className="posters-wrapper">
      {movies.map(movie => (
        <img 
        id={movie.id}
        key={movie.id}
        onClick={() => updateCurrentPoster(movie)}
        onMouseOver={setTrue} 
        className={`poster ${isMousedOver && 'pointer-cursor'}`} 
        src={movie.poster_path} 
        alt={`${movie.title} movie poster`} 
        />
      ))}
    </div>
  )
}

export default Poster