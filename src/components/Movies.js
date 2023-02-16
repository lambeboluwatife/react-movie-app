import Movie from "./Movie";

const Movies = ({ movies }) => {
  return (
    <main id="main">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </main>
  );
};

export default Movies;
