import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { API_KEY, BASE_URL, IMG_BASE_URL } from "../app/API/config";
import ERROR_IMG from "../assets/no-image.jpg";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import Pagination from "./Pagination/Pagination";
import useFetch from "../hooks/useFetch";

function PopularList() {
  const currentPage = useSelector((state) => state.filter.currentPage);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
  );
  let popularMovies = data?.results;
  let pagesAmount = 1;
  data?.total_pages <= 500
    ? (pagesAmount = data.total_pages)
    : (pagesAmount = 500);

  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "black" }}>
        <Grid container spacing={1}>
          {popularMovies &&
            popularMovies?.map((movie) => (
              <Grid item xs={4} md={2} lg={1.5} key={`movie${movie.id}`}>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={
                      movie.poster_path
                        ? `${IMG_BASE_URL}/${movie.poster_path}`
                        : `${ERROR_IMG}`
                    }
                    alt={movie.title}
                    loading="lazy"
                  />
                </Link>
              </Grid>
            ))}
        </Grid>
      </Box>
      <Pagination pagesAmount={pagesAmount} />
    </>
  );
}

export default PopularList;
