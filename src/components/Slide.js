import { useEffect, useState, useRef } from "react";
import "../App.css";
import Movie from "./Movie";

const Slide = ({ movie, containerLength }) => {
  const IMAGE_WIDTH = 200;
  const [curMargin, setCurMargin] = useState(0);
  const slide = useRef(0);
  const slideWidth = IMAGE_WIDTH * containerLength;
  const [style, setStyle] = useState({
    width: `${slideWidth}px`,
    transform: `translateX(${curMargin}px)`,
    transition: `all 0.2s ease-in-out`,
  });
  const nextSlide = () => {
    if (curMargin - IMAGE_WIDTH < -slideWidth / 2 - IMAGE_WIDTH) return;
    setStyle({
      width: `${slideWidth}px`,
      transform: `translateX(${curMargin - IMAGE_WIDTH}px)`,
      transition: `all 0.2s ease-in-out`,
    });
    setCurMargin(curMargin - IMAGE_WIDTH);
  };
  const prevSlide = () => {
    if (curMargin + IMAGE_WIDTH > 0) return;
    setStyle({
      width: `${slideWidth}px`,
      transform: `translateX(${curMargin + IMAGE_WIDTH}px)`,
      transition: `all 0.2s ease-in-out`,
    });
    setCurMargin(curMargin + IMAGE_WIDTH);
  };

  return (
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
  );
};

export default Slide;
