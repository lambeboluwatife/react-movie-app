import { useState, useEffect } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Search from "./components/Search";

const App = () => {
  const API =
    "https://api.themoviedb.org/3/trending/all/day?api_key=514318c6f6f673457a51ffcaf8158cf2";

  const SEARCH_API =
    'https://api.themoviedb.org/3/search/multi?api_key=514318c6f6f673457a51ffcaf8158cf2&query="';

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

    console.log(data.results);
    return data.results;
  };

  async function getMovies(url, genreId) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(genreId);

    if (genreId !== undefined) {
      const filteredData = data.results.filter((movie) =>
        movie.genre_ids.includes(parseInt(genreId))
      );

      setMovies(filteredData);
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
      {movies.length > 0 ? <Movies movies={movies} /> : "Movie Not Found"}
    </div>
  );
};

export default App;
