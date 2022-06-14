import { useEffect, useState, useRef } from "react";
import "../App.css";
import Movie from "./Movie";

const Slide = ({ movie, containerLength, title, setModal }) => {
  const SLIDE_BAR_WIDTH = 1800;
  const IMG_NUM = 10;
  const IMAGE_WIDTH = SLIDE_BAR_WIDTH / IMG_NUM; // 180

  const [curPosition, setCurPosition] = useState(0);
  const slide = useRef(0);
  const slideWidth = IMAGE_WIDTH * containerLength;
  const [style, setStyle] = useState({
    width: `${slideWidth}px`,
    transform: `translateX(${curPosition}px)`,
    transition: `all 0.5s ease-in-out`,
  });
  // console.log(movie.length);
  // console.log(slideWidth); //4000
  // console.log(curPosition);
  const nextSlide = () => {
    if (
      curPosition - IMAGE_WIDTH /*-180*/ < -IMG_NUM * IMAGE_WIDTH /*-1800*/ ||
      movie.length < 10
    )
      return null;
    setStyle({
      width: `${slideWidth}px`,
      transform: `translateX(${curPosition - IMAGE_WIDTH * IMG_NUM}px)`,
      transition: `all 0.5s ease-in-out`,
    });
    setCurPosition(curPosition - IMAGE_WIDTH * IMG_NUM);
  };

  const prevSlide = () => {
    if (curPosition + IMAGE_WIDTH > 0) return null;
    setStyle({
      width: `${slideWidth}px`,
      transform: `translateX(${curPosition + IMAGE_WIDTH * IMG_NUM}px)`,
      transition: `all 0.5s ease-in-out`,
    });
    setCurPosition(curPosition + IMAGE_WIDTH * IMG_NUM);
  };

  return (
    <div>
      <div className="title_box">
        <span className="title">{title}</span>
      </div>
      <div className="slide_view">
        <div className="prev" onClick={prevSlide}>
          &lang;
        </div>
        <div
          className="movie_slide_list"
          style={{ width: `${SLIDE_BAR_WIDTH}px` }}
        >
          <div ref={slide} className="movie_slide" style={style}>
            {movie.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                coverImage={movie.medium_cover_image}
                imageWidth={IMAGE_WIDTH}
                movie={movie}
                setModal={setModal}
              />
            ))}
          </div>
        </div>
        <div className="next" onClick={nextSlide}>
          &rang;
        </div>
      </div>
    </div>
  );
};

export default Slide;
