import { useState, useEffect } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
import NoMatch from "./components/NoMatch";
import Search from "./components/Search";

const App = () => {
  const API =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=514318c6f6f673457a51ffcaf8158cf2";

  const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=514318c6f6f673457a51ffcaf8158cf2&query="';

  const GENRE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=514318c6f6f673457a51ffcaf8158cf2`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesFromServer = await fetchMovies();
      setMovies(moviesFromServer);
    };
    getMovies();
  }, []);

  // Fetch Movies
  const fetchMovies = async () => {
    const res = await fetch(API);
    const data = await res.json();

    const genreRes = await fetch(GENRE_API);
    const genreData = await genreRes.json();

    const genresMap = {};
    genreData.genres.forEach((genre) => {
      genresMap[genre.id] = genre.name;
    });

    const movies = data.results.map((movie) => {
      const genreNames = movie.genre_ids.map((id) => genresMap[id]);
      return { ...movie, genre_names: genreNames };
    });

    return movies;
  };

  async function getMovies(url, genreId) {
    const res = await fetch(url);
    const data = await res.json();

    if (genreId !== undefined) {
      const filteredData = data.results.filter((movie) =>
        movie.genre_ids.includes(parseInt(genreId))
      );

      const genreRes = await fetch(GENRE_API);
      const genreData = await genreRes.json();

      const genresMap = {};
      genreData.genres.forEach((genre) => {
        genresMap[genre.id] = genre.name;
      });

      const movies = filteredData.map((movie) => {
        const genreNames = movie.genre_ids.map((id) => genresMap[id]);
        return { ...movie, genre_names: genreNames };
      });

      setMovies(movies);
    } else {
      setMovies(data.results);
    }
  }

  const getData = (data1, data2) => {
    getMovies(SEARCH_API + data1, data2);
  };

  return (
    <div className="container">
      <Header />
      <Search onSubmit={getData} />
      {movies.length > 0 ? <Movies movies={movies} /> : <NoMatch />}
    </div>
  );
};

export default App;
