import { useState, useEffect } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";

const App = () => {
  const API =
    "https://api.themoviedb.org/3/trending/all/day?api_key=514318c6f6f673457a51ffcaf8158cf2";

  const SEARCH_API =
    'https://api.themoviedb.org/3/search/tv?api_key=514318c6f6f673457a51ffcaf8158cf2&query="';

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

    return data.results;
  };
  return (
    <div className="container">
      <Header />
      <Movies movies={movies} />
    </div>
  );
};

export default App;
