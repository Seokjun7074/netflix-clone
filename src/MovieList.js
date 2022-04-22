import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState, useRef } from "react";
import "./App.css";
import Movie from "./components/Movie";

const MovieList = () => {
  const [movie, setMovie] = useState([]);
  const [movieNumber, setMovieNumber] = useState(10);
  const [loading, setLoading] = useState(true);
  const [curMargin, setCurMargin] = useState(0);
  const slide = useRef(0);

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
  // console.log(Object.keys(movie).length);
  useEffect(() => {
    getMovies();
  }, []);
  useEffect(() => {
    setMovieNumber(Object.keys(movie).length);
  }, [movie]);
  console.log(curMargin);

  return (
    <div className="MovieList">
      {/* <h2>리스트 나올 화면</h2> */}
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="slide" ref={slide}>
            <ul
              className="movie_slide"
              style={{ width: 200 * movieNumber + "px" }}
            >
              {movie.map((e) => (
                <Movie
                  key={e.id}
                  id={e.id}
                  title={e.title}
                  cover_image={e.medium_cover_image}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="slide_controller">
        <span
          className="prev"
          onClick={() => {
            if (curMargin === 0) {
              return;
            }
            slide.current.style = `margin-left:${curMargin + 200}px`;
            setCurMargin(curMargin + 200);
          }}
        >
          &lang;
        </span>
        <span
          className="next"
          onClick={() => {
            slide.current.style = `margin-left:${curMargin - 200}px`;
            setCurMargin(curMargin - 200);
          }}
        >
          &rang;
        </span>
      </div>

      {/* <div className="left_slide_controller">
        <span
          className="prev"
          onClick={() => {
            slide.current.style = `margin-left:${curMargin + 200}px`;
            setCurMargin(curMargin + 200);
          }}
        >
          &lang;
        </span>
      </div>
      <div className="right_slide_controller">
        <span
          className="next"
          onClick={() => {
            slide.current.style = `margin-left:${curMargin - 200}px`;
            setCurMargin(curMargin - 200);
          }}
        >
          &rang;
        </span>
      </div> */}
    </div>
  );
};

export default MovieList;
