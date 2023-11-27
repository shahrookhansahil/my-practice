import React from "react";
import Movie from "./Movie";
import movies from "./movies.json";
import "./Movies.css";
function ShowMovies() {
  return (
    <div className="App">
      <h1>Movies App</h1>
      <div className="main">
        {movies.map((element, index) => {
          return (
            <Movie
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShowMovies;
