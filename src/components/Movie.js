import "../App.css";
import { useEffect, useState } from "react";

const Movie = ({ id, title, coverImage, imageWidth, movie, setModal }) => {
  return (
    <div
      className="Movie"
      style={{ width: `${imageWidth}px` }}
      onClick={() => {
        setModal(true, movie);
        // console.log(typeof movie);
      }}
    >
      <img className="cover_image" src={coverImage} />
    </div>
  );
};

export default Movie;
