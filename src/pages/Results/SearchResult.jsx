import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { asyncSearch } from "../../reducers/filterSlice";
import Pagination from "../../components/Pagination/Pagination";
import MovieList from "../../components/MovieList/MovieList";

function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movies = useSelector((state) => state.filter.results);
  const pagesAmount = useSelector((state) => state.filter.pagesAmount);
  let currentPage = useSelector((state) => state.filter.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    let query = searchParams.get("q");
    const searchDebounce = setTimeout(() => {
      dispatch(asyncSearch({ query, currentPage }));
    }, 1500);
    return () => {
      clearTimeout(searchDebounce);
    };
  }, [searchParams, dispatch, currentPage]);
  return (
    <>
      <MovieList movies={movies} />
      <Pagination pagesAmount={pagesAmount} />
    </>
  );
}

export default SearchResult;
