import { useEffect, useState, useRef } from "react";
import "../App.css";
import Movie from "./Movie";

const Slide = ({ movie, containerLength }) => {
  const IMAGE_WIDTH = 200;
  const [curPosition, setCurPosition] = useState(0);
  const slide = useRef(0);
  const slideWidth = IMAGE_WIDTH * containerLength;
  const [style, setStyle] = useState({
    width: `${slideWidth}px`,
    transform: `translateX(${curPosition}px)`,
    transition: `all 0.2s ease-in-out`,
  });
  const nextSlide = () => {
    if (curPosition - IMAGE_WIDTH < -slideWidth / 2 - IMAGE_WIDTH) return;
    setStyle({
      width: `${slideWidth}px`,
      transform: `translateX(${curPosition - IMAGE_WIDTH * 9}px)`,
      transition: `all 0.5s ease-in-out`,
    });
    setCurPosition(curPosition - IMAGE_WIDTH * 9);
  };
  const prevSlide = () => {
    if (curPosition + IMAGE_WIDTH > 0) return;
    setStyle({
      width: `${slideWidth}px`,
      transform: `translateX(${curPosition + IMAGE_WIDTH * 9}px)`,
      transition: `all 0.5s ease-in-out`,
    });
    setCurPosition(curPosition + IMAGE_WIDTH * 9);
  };

  return (
    <div className="slide">
      <div className="prev" onClick={prevSlide}>
        &lang;
      </div>
      <div className="movie_slide_list">
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
      </div>
      <div className="next" onClick={nextSlide}>
        &rang;
      </div>
    </div>
  );
};

export default Slide;
