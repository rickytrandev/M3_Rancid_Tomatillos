import Header from "../Header/Header"
import Poster from "../Poster/Poster"

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