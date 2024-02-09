import Header from "../Header/Header"
import Poster from "../Poster/Poster"
import { PropTypes } from 'prop-types'

function Home({ movies }) {
  return (
    <>
      <Header />
      <Poster
        movies={movies}
      />
    </>
  )
}

export default Home

Home.propTypes = {
  movies: PropTypes.array.isRequired,
}

