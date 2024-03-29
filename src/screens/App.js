import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import { getMoviesByTerm } from "../api/TMDB";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getMoviesByTerm(searchTerm, setMovies, currentPage, setTotalPages);
  };
  const handleChange = (event) => {
    //console.log(event.target.value)
    setSearchTerm(event.target.value);
  };
  const nextPage = async (page_number) => {
    setCurrentPage(page_number);
    await getMoviesByTerm(searchTerm, setMovies, currentPage, setTotalPages);
  };
  return (
    <div >
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <MovieList movies={movies}></MovieList>
      {totalPages > 1 ? (
        <Pagination
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      ) : ( "")}
    </div>
  );
};
export default App;
