import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterByGenre } from "../../reducers/filterSlice";
import Pagination from "../../components/Pagination/Pagination";
import MovieList from "../../components/MovieList/MovieList";

function FilterGenreResults() {
  const genre = useParams();
  const genreId = genre.genre;
  const movies = useSelector((state) => state.filter.results);
  const dispatch = useDispatch();
  const pagesAmount = useSelector((state) => state.filter.pagesAmount);
  let currentPage = useSelector((state) => state.filter.currentPage);

  useEffect(() => {
    dispatch(filterByGenre({ genreId, currentPage }));
  }, [genreId, currentPage, dispatch]);

  return (
    <>
      <MovieList movies={movies} />
      <Pagination pagesAmount={pagesAmount} />
    </>
  );
}

export default FilterGenreResults;
