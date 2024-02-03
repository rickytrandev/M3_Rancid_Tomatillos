import './MovieDetails.css'

function MovieDetails(props) {

  function formatDate(inputDate) {
    const options = { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' };
    const formattedDate = new Date(inputDate).toLocaleDateString(undefined, options);
  
    // Extract day suffix (e.g., "st", "nd", "rd", "th")
    const day = new Date(inputDate).getUTCDate();
    const daySuffix = getDaySuffix(day);
  
    return formattedDate.replace(/\b(\d{1,2})\b/, `$1${daySuffix}`);
  }
  
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }
  
  const formattedDate = formatDate(props.release_date);
  
  

  return (
    <div className="movie-details-container">
      <div className="movie-details-card">
        <h2  className='card-title'>{props.title}</h2>
        {/* <img className='movie-details-poster' src={props.poster_path} alt={`${props.title} movie poster`}/> */}
        <div className="movie-details">
          <p className='details' >Released: {formattedDate}</p>
          <p className='details' >Rating: {props.average_rating.toFixed(1)}</p>
        </div>
      </div>
      <div 
        className="backdrop"
        style={{background: `url(${props.backdrop_path}) center/cover no-repeat`}}
      >
      </div>
    </div>
  )
}

export default MovieDetails