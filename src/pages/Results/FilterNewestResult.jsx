import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import { filterByNewest } from "../../reducers/filterSlice";
import MovieList from "../../components/MovieList/MovieList";

function FilterNewestResult() {
  const movies = useSelector((state) => state.filter.results);
  const dispatch = useDispatch();
  const pagesAmount = useSelector((state) => state.filter.pagesAmount);
  let currentPage = useSelector((state) => state.filter.currentPage);

  useEffect(() => {
    dispatch(filterByNewest({ currentPage }));
  }, [currentPage, dispatch]);

  return (
    <>
      <MovieList movies={movies} />
      <Pagination pagesAmount={pagesAmount} />
    </>
  );
}

export default FilterNewestResult;
