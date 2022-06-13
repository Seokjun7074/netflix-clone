import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState, useRef } from "react";
import "./App.css";
import Slide from "./components/Slide";
import Modal from "./components/Modal";

const MovieList = ({ setModal }) => {
  const [movie, setMovie] = useState([]);
  const [movieNumber, setMovieNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const jsonResponse = await response.json();
    setMovie(jsonResponse.data.movies);
    setLoading(false);
    // setModal(true);
  };
  useEffect(() => {
    getMovies();
  }, []);
  useEffect(() => {
    setMovieNumber(Object.keys(movie).length);
  }, [movie]);

  //영화 장르 필터 함수
  const filterGenre = (filterGenre) => {
    const arr = movie.filter((e) => e.genres.includes(filterGenre));
    return arr;
  };
  // console.log(filterGenre("Drama"));

  return (
    <div className="MovieList">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <Slide
            movie={movie}
            containerLength={movieNumber}
            title={"전체"}
            setModal={setModal}
          />
          <Slide
            movie={filterGenre("Drama")}
            containerLength={movieNumber}
            title={"Drama"}
            setModal={setModal}
          />
          <Slide
            movie={filterGenre("Action")}
            containerLength={movieNumber}
            title={"Action"}
            setModal={setModal}
          />
        </div>
      )}
    </div>
  );
};

export default MovieList;
