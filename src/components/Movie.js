import "../App.css";
import { useEffect, useState } from "react";

const Movie = ({ id, title, coverImage, imageWidth, setModal }) => {
  return (
    <div
      className="Movie"
      style={{ width: `${imageWidth}px` }}
      onClick={() => {
        setModal(true);
        console.log(title);
      }}
    >
      <img src={coverImage} />
    </div>
  );
};

export default Movie;
