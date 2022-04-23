import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState, useRef } from "react";
import "./App.css";
import Movie from "./components/Movie";

const MovieList = () => {
  const IMAGE_WIDTH = 200;
  const [movie, setMovie] = useState([]);
  const [movieNumber, setMovieNumber] = useState(10);
  const [loading, setLoading] = useState(true);
  const [curMargin, setCurMargin] = useState(0);
  const slide = useRef(0);

  const [style, setStyle] = useState({
    width: `4000px`,
    transform: `translateX(${curMargin}px)`,
    transition: `all 0.2s ease-in-out`,
  });

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

  const nextSlide = () => {
    setStyle({
      width: `4000px`,
      transform: `translateX(${curMargin - IMAGE_WIDTH}px)`,
      transition: `all 0.2s ease-in-out`,
    });
    setCurMargin(curMargin - IMAGE_WIDTH);
  };
  const prevSlide = () => {
    if (curMargin + IMAGE_WIDTH > 0) return;
    setStyle({
      width: `4000px`,
      transform: `translateX(${curMargin + IMAGE_WIDTH}px)`,
      transition: `all 0.2s ease-in-out`,
    });
    setCurMargin(curMargin + IMAGE_WIDTH);
  };

  return (
    <div className="MovieList">
      {/* <h2>리스트 나올 화면</h2> */}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="slide">
          <ul ref={slide} className="movie_slide" style={style}>
            {movie.map((e) => (
              <Movie
                key={e.id}
                id={e.id}
                title={e.title}
                coverImage={e.medium_cover_image}
                imageWidth={IMAGE_WIDTH}
              />
            ))}
          </ul>
          <div className="slide_controller">
            <div className="prev" onClick={prevSlide}>
              &lang;
            </div>
            <div className="next" onClick={nextSlide}>
              &rang;
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
