import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState, useRef } from "react";
import "./App.css";
import Slide from "./components/Slide";

const MovieList = () => {
  const IMAGE_WIDTH = 200;
  const [movie, setMovie] = useState([]);
  const [movieNumber, setMovieNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  // const [curMargin, setCurMargin] = useState(0);
  // const slide = useRef(0);

  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const jsonResponse = await response.json();
    setMovie(jsonResponse.data.movies);
    setLoading(false);
    // console.log("fetch 끝");
  };
  useEffect(() => {
    getMovies();
  }, []);
  useEffect(() => {
    setMovieNumber(Object.keys(movie).length);
  }, [movie]);
  // console.log(movie);
  // console.log(IMAGE_WIDTH * movieNumber);

  return (
    <div className="MovieList">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <Slide movie={movie} containerLength={movieNumber} />
          <Slide movie={movie} containerLength={movieNumber} />
          <Slide movie={movie} containerLength={movieNumber} />
        </div>
      )}
    </div>
  );
};

export default MovieList;
