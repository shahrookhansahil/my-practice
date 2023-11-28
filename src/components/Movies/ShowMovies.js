import React from "react";
import Movie from "./Movie";
import movies from "./movies.json";
import "./Movies.css";
function ShowMovies() {
  return (
    <div className="App">
      <h1>Movies App</h1>
      <p>
        This is a simple app that shows a list of movies from a JSON file by
        using React
      </p>
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
