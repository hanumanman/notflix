import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import { filterByTopRated, updatePage } from "../../reducers/filterSlice";
import MovieList from "../../components/MovieList/MovieList";

function FilterTopRatedResults() {
  const movies = useSelector((state) => state.filter.results);
  const dispatch = useDispatch();
  const pagesAmount = useSelector((state) => state.filter.pagesAmount);

  let currentPage = useSelector((state) => state.filter.currentPage);

  useEffect(() => {
    dispatch(filterByTopRated({ currentPage }));
  }, [currentPage, dispatch]);

  return (
    <>
      <MovieList movies={movies} />
      <Pagination pagesAmount={pagesAmount} />
    </>
  );
}

export default FilterTopRatedResults;
