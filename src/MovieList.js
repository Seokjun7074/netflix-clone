import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";

const MovieList = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const response = await fetch(
      //   "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=7176114f7ef6e008b5df6b590fcce4ea&targetDt=20120928"
      "https://yts.mx/api/v2/list_movies.json"
    );
    const jsonResponse = await response.json();
    setMovie(jsonResponse.data.movies);
    setLoading(false);
    //   .then((json) => setMovie(json.boxOfficeResult.dailyBoxOfficeList));
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log("movie: ", movie);

  return (
    <div className="MovieList">
      <h2>리스트 나올 화면</h2>
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            {movie.map((e) => (
              <Movie
                key={e.id}
                id={e.id}
                title={e.title}
                cover_image={e.medium_cover_image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
