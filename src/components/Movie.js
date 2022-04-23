import "../App.css";
import { useEffect, useState } from "react";

const Movie = ({ id, title, coverImage, imageWidth }) => {
  return (
    <li className="Movie" style={{ width: `${imageWidth}px` }}>
      <img src={coverImage} />
      {/* <h6>{title}</h6> */}
    </li>
  );
};

export default Movie;
