import { useEffect, useState } from "react";

const Movie = ({ id, title, cover_image }) => {
  return (
    <div className="Movie">
      <h2>영화정보</h2>
      <div>{title}</div>
      <img src={cover_image} />
    </div>
  );
};

export default Movie;
