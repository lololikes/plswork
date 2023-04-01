import React, { useState } from "react";
import data from "../../../plswork/src/data/MovieData.json";

const movieData = data.MovieDataSample;

export const Movies = () => {
  const [listOfMovies] = useState(movieData);
  return (
    <div className="App-header">
      <br></br>
      <h1>My Sweet Movie Collection!</h1>

      <br></br>
      <div>
        <table className="table table-striped table-hover table-light">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Director</th>
              <th scope="col">Rating</th>
              <th scope="col">Category</th>
              <th scope="col">Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
