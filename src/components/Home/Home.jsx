import Header from "../Header/Header"
import Poster from "../Poster/Poster"
import { PropTypes } from 'prop-types'

function Home({movies, updateCurrentPoster}) {
  return (
    <>
      <Header />
      <Poster 
        movies={movies}
        updateCurrentPoster={updateCurrentPoster}
      />
  </>
  )
}

export default Home


