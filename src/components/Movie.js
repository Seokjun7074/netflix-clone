import "../App.css";
import { useEffect, useState } from "react";

const Movie = ({ id, title, cover_image }) => {
  return (
    <li className="Movie">
      <img src={cover_image} />
      {/* <h6>{title}</h6> */}
    </li>
  );
};

export default Movie;
