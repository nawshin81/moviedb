import React, { useState, useEffect } from "react";
import { getMovieDetails } from "./../api/TMDB";
import { Link } from "react-router-dom";

const MovieDetails = (props) => {
  const [currentMovie, setCurrentMovie] = useState({});
  useEffect(() => {
    getMovieDetails(props.location.movie_id, setCurrentMovie);
  }, []);

  const ImageURL =
    "https://image.tmdb.org/t/p/w500/" + currentMovie.poster_path;
  return (
    <div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            {currentMovie.poster_path == null ? (
              <img
                src="https://picsum.photos/200/300"
                style={{ width: "100", height: "200" }}
              />
            ) : (
              <img src={ImageURL} style={{ width: "100", height: "200" }} />
            )}

            
          </div>
          <div className="card-content">
          <span className="card-title" style={{color:'black'}}>{currentMovie.original_title}</span>
            <p style={{fontSize:30,paddingLeft:10,paddingRight:10}}>{currentMovie.overview}</p></div>
          <div className="card-action">
            <Link to="/">Go to search page!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
