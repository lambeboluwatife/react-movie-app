const Movie = ({ movie }) => {
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
    function getClassByRate(vote) {
        if (vote >= 8) {
        return "green";
        } else if (vote >= 5) {
        return "orange";
        } else {
        return "red";
        }
    }

    // function getGenres(genres) {
    //     const g = genres.map((genre) => genre).join(", ");
    //     return g;
    //   }
  return (
    <div className="movie">
        <img src={IMG_PATH + movie.poster_path} alt={movie.title} />
        <div className="movie-info">
            <h3>{movie.title || movie.name}</h3>
            <span className={getClassByRate(movie.vote_average)}>{movie.vote_average}</span>            <div className="overview">
                <h3>Overview</h3>
                {movie.overview}
                <h6>Released On: {movie.release_date || movie.first_air_date}</h6>
                <h6>Type: {movie.media_type}</h6>
            </div>
        </div>
    </div>
  )
};

export default Movie;
