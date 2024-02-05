import React, {useState} from 'react'
import './Poster.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Poster({movies, updateCurrentPoster}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  let moviesRow1 = movies.slice(0, 15)
  let moviesRow2 = movies.slice(15, 29)
  let moviesRow3 = movies.slice(29, 40)

  // <Carousel responsive={responsive}>
  //   <div>Item 1</div>
  //   <div>Item 2</div>
  //   <div>Item 3</div>
  //   <div>Item 4</div>
  // </Carousel>;

  const [isMousedOver, setMouseOver] = useState(false)
  function setTrue() {
    setMouseOver(true)
  }

  return (
    <>
      <Carousel 
        responsive={responsive}
        infinite={true}
        // autoPlay={true}
        // autoPlaySpeed={2000}
        // rewind={true}
        >
        {moviesRow1.map(movie => (
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
      </Carousel>
      <Carousel 
        responsive={responsive}
        infinite={true}
        >
        {moviesRow2.map(movie => (
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
      </Carousel>
      <Carousel 
        responsive={responsive}
        infinite={true}
        >
        {moviesRow3.map(movie => (
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
      </Carousel>
    </>
    // <div className="posters-wrapper">
    //   {movies.map(movie => (
    //     <img 
    //     id={movie.id}
    //     key={movie.id}
    //     onClick={() => updateCurrentPoster(movie)}
    //     onMouseOver={setTrue} 
    //     className={`poster ${isMousedOver && 'pointer-cursor'}`} 
    //     src={movie.poster_path} 
    //     alt={`${movie.title} movie poster`} 
    //     />
    //   ))}
    // </div>
  )
}

export default Poster