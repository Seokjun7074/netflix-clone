import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";

const MovieList = () => {
  const [movie, setMovie] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      //   "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=7176114f7ef6e008b5df6b590fcce4ea&targetDt=20120928"
      "https://yts.mx/api/v2/list_movies.json"
    );
    const jsonResponse = await response.json();
    setMovie(jsonResponse.data.movies);
    //   .then((json) => setMovie(json.boxOfficeResult.dailyBoxOfficeList));
  };
  useEffect(() => {
    getMovies();
    // console.log("fetch finish");
  }, []);
  console.log("movie: ", movie);

  return (
    <div className="MovieList">
      <h2>리스트 나올 화면</h2>
      <Movie />
    </div>
  );
};

export default MovieList;
