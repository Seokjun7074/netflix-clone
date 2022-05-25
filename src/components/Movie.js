import "../App.css";
import { useEffect, useState } from "react";

const Movie = ({ id, title, coverImage, imageWidth }) => {
  return (
    <div className="Movie" style={{ width: `${imageWidth}px` }}>
      <img src={coverImage} />
      {/* <h6>{title}</h6> */}
    </div>
  );
};

export default Movie;
